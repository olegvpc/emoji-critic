git init
git add .
git ststus
git fetch origin main
git push

git commit -m 'first commit'

server for upload files - Web/mongo-files
git remote add origin https://github.com/olegvpc/emoji-critic.git

olegvpc@192 emoji-critic % git branch  
* master
olegvpc@192 emoji-critic % git checkout master 
M       README.md
Already on 'master'
olegvpc@192 emoji-critic % git branch          
* master
olegvpc@192 emoji-critic % git branch main master -f 
olegvpc@192 emoji-critic % git branch                
  main
* master
olegvpc@192 emoji-critic % git checkout main
M       README.md
Switched to branch 'main'
olegvpc@192 emoji-critic % git branch       
* main
  master
olegvpc@192 emoji-critic % git push origin main -f
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/olegvpc/emoji-critic.git
 + a226966...b416236 main -> main (forced update)
