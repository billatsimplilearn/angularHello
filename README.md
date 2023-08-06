
# Creating a Project From Scratch
1.  From command line / terminal, go to root folder (c:\_home\simplilearn) or (~/_home/caltech)
2.  mkdir &lt;new project name&gt;
3.  cd &lt;new project name&gt;
4.  git init
5.  For Windows:
	echo hello &gt; README.md

	For Mac / Linux:
	touch README.md

6.  Go to your browser and log into github.
7.  Create repository &lt;new project name&gt; in github.
8.  You will receive instructions on what to do next in github.
9.  Back to command line, let's commit what we have:
10. git add .
11. git commit -m "init" (or whatever initial comment you want)
12. Copy first line from github instruction (git add remote origin &lt;some url&gt;)
13. git branch -M main
14.  git push -u origin main       (the first time we do this in a branch we need to specify what branch and what remote.  After this you can just git push)
15.  Check:
	git status (seeing that everything is commited and up to date)
	Refresh github page and see README.md file there.

There are MANY ways to do this, but this is the way we just did it.

