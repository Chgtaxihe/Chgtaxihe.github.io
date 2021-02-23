import os
import re

def rename():
    ori_path = r"F:\blog\docs\算法分类学习\09.其他"

    files = os.listdir(ori_path)
    idx = 1
    for f in files:
        fp = os.path.join(ori_path, f)
        if f.endswith(".md"):
            prefix = "%02d." % idx
            os.rename(fp, os.path.join(ori_path, prefix + f))
            idx += 1
    

def hide(path):
    files = os.listdir(path)
    for filename in files:
        fp = os.path.join(path, filename)
        if os.path.isdir(fp):
            hide(fp)
            continue
        if not filename.endswith(".md"):
            continue

        dash_end = -1
        has_sidebar_attr = False
        with open(fp, "r", encoding="utf-8") as f:
            lines = f.readlines()
            if not lines[0].startswith("---"):
                continue
            for idx, line in enumerate(lines[1:]):
                if line.startswith("article"):
                    has_sidebar_attr = True
                if line.startswith("---"):
                    dash_end = idx + 1
                    break
        if dash_end == -1 or has_sidebar_attr:
            continue
        
        with open(fp, "w", encoding="utf-8") as f:
            f.writelines(lines[:dash_end])
            f.write("article: false\n")
            f.writelines(lines[dash_end:])

def fix_cpp(path):
    files = os.listdir(path)
    for filename in files:
        fp = os.path.join(path, filename)
        if os.path.isdir(fp):
            fix_cpp(fp)
            continue
        if not filename.endswith(".md"):
            continue

        need_to_fix = False
        with open(fp, "r", encoding="utf-8") as f:
            lines = f.readlines()
            for idx, line in enumerate(lines):
                if line.startswith("```c++"):
                    lines[idx] = "```cpp" + line[6:]
                    need_to_fix = True
        if not need_to_fix:
            continue
        
        with open(fp, "w", encoding="utf-8") as f:
            f.writelines(lines)
            

def find_keyword(path, keyword):
    files = os.listdir(path)
    for filename in files:
        fp = os.path.join(path, filename)
        if os.path.isdir(fp):
            find_keyword(fp, keyword)
            continue
        if not filename.endswith(".md"):
            continue

        has_keywork = False
        with open(fp, "r", encoding="utf-8") as f:
            lines = f.readlines()
            for idx, line in enumerate(lines):
                if keyword in line:
                    has_keywork = True
                    break
        if not has_keywork:
            continue
        print(fp)

def fix_mathjax(path):
    files = os.listdir(path)
    for filename in files:
        fp = os.path.join(path, filename)
        if os.path.isdir(fp):
            fix_mathjax(fp)
            continue
        if not filename.endswith(".md"):
            continue

        need_to_fix = False
        result = ""
        with open(fp, "r", encoding="utf-8") as f:
            content = f.read()
            if content.find("$$") != -1:
                result = parse_mathjax(content)
                result = fix2(result)
                need_to_fix = True
        if not need_to_fix:
            continue
        print("处理：" + fp)
        with open(fp, "w", encoding="utf-8") as f:
            f.write(result)


def parse_mathjax(raw):
    ori = raw
    result = ""
    
    while True:
        idx = raw.find("$$")
        if idx == -1:
            result += raw
            return result
        result += raw[:idx + 2]
        raw = raw[idx+2:]
        nxt = raw.find("$$")
        if nxt == -1:
            print("出错！！")
            return ori
        mathjax = raw[:nxt]
        mathjax = mathjax.replace("\n", "").replace("\r", "")
        result += mathjax + "$$"
        raw = raw[nxt + 2:]
    return result

def fix2(raw):
    raw = raw.replace("aligneded", "aligned")
    raw = raw.replace("align", "aligned")
    raw = raw.replace("aligneded", "aligned")
    raw = re.sub(r"\\tag{.*?}", "", raw)
    return raw

if __name__ == "__main__":
    # find_keyword(r"F:\blog\docs\练习", "``c++")
    # hide(r"F:\blog\docs\框架学习")
    # content = "abc $$ axg=max(a, \n bcd) \n $$"
    # print(content)
    # print(parse_mathjax(content))
    fix_mathjax(r"F:\blog\docs\练习")
