# parses html from wordpress blogs, removing the class names. Assumes this script in the same directory where blogs are stored
# arg[1]: file name in src/blogs directory


import sys
import re

file_name = sys.argv[1]
edited_file_name = file_name.split(".")[0]

pattern = re.compile('(class|style|width|height)="[^"]+"|', re.IGNORECASE)
comments_pattern = re.compile('(<!--)(.*)(-->)', re.IGNORECASE)
# try:
with open("./" + file_name, "r") as blog, open("./edited_blog.html", "w+") as edited_blog:
    for line in blog.readlines():
        edited_line = re.sub(pattern, "", line) #replace all class names and stylings with empty string
        edited_line = re.sub(comments_pattern, "", edited_line) #remove comments
        edited_blog.write(edited_line)
# except file:
blog.close()
edited_blog.close()
    