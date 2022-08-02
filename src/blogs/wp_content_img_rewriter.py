import sys
import re

file_name = "content.js"
blog_id = "2"
file_dir = "./assets/{}/{}".format(blog_id, file_name)
edited_file_dir = "./assets/{}/content_new.js".format(blog_id)

# NOTE: this pattern was used for blog_id = 2. The number 4 in the pattern is a workaround / shortcut, 
# using the fact that the blog was written in 2020/04. to match the group correctly. 
# For future blogs from wordpress, Check the regex to capture the correct group.
pattern = "4\/(.*)(jpg|png)" #pattern for getting file name from url, will be 1st group

with open(file_dir, "r") as blog, open(edited_file_dir, "w+") as edited_blog:
    for line in blog.readlines():
        new_line = line
        if("<figure >" in line and "</figure>" in line):
            match = re.search(pattern, line)
            if(match):
                file_name = match.group(1) + match.group(2) 
                new_line = '\t<BlogImage blogId={{{}}} imgName="{}" imgAlt=""/>\n'.format(blog_id, file_name)
        edited_blog.write(new_line)

blog.close()
edited_blog.close()