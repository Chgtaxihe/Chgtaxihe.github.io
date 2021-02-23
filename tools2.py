import os
import re

def rename(path):
    files = os.listdir(path)
    idx = 1
    for f in files:
        fp = os.path.join(path, f)
        if os.path.isdir(fp):
            rename(fp)
        elif f.endswith(".PNG"):
            print(os.path.join(path, f[:-3] + "png"))
            os.rename(fp, os.path.join(path, f[:-3] + "png"))
        elif f.endswith(".md"):
            with open(fp, "r", encoding="utf-8") as f:
                content = f.read()
            if "PNG" in content:
                print(fp)
                with open(fp, "w", encoding="utf-8") as f:
                    content = content.replace("PNG", "png")
                    f.write(content)

if __name__ == "__main__":
    rename(r"F:\chgtaxihe.github.io\docs")
