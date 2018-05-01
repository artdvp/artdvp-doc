# List of Command Line Commands

from codecademy

### Glossary of commonly used commands

## BACKGROUND

The command line is a text interface for your computer. It's a program that takes in commands, which it passes on to the computer's operating system to run.

From the command line, you can navigate through files and folders on your computer, just as you would with Windows Explorer on Windows or Finder on Mac OS. The difference is that the command line is fully text-based.

#### Here's an appendix of commonly used commands.

`<strong>COMMANDS</strong>`

## >

`$ cat oceans.txt > continents.txt`

 **>**   takes the standard output of the command on the left, and redirects it to the file on the right.

## >>

`$ cat glaciers.txt >> rivers.txt`

 **>>**   takes the standard output of the command on the left and appends (adds) it to the file on the right.

## <

`$ cat < lakes.txt`

#### <strong> < </strong> takes the standard input from the file on the right and inputs it into the program on the left.

## |

`$ cat volcanoes.txt | wc `

####  <strong> | </strong>  is a "pipe". The <strong> | </strong> takes the standard output of the command on the left, and pipes it as standard input to the command on the right. You can think of this as "command to command" redirection.

## ~/.BASH_PROFILE 

`$ nano ~/.bash_profile `

#### <strong> ~/.bash_profile </strong> is the name of file used to store environment settings. It is commonly called the "bash profile". When a session starts, it will load the contents of the bash profile before executing commands.

## ALIAS

`alias pd="pwd"`

#### The <strong> alias </strong> command allows you to create keyboard shortcuts, or aliases, for commonly used commands.

## CD

`cd Desktop/`

#### <strong>cd </strong> takes a directory name as an argument, and switches into that directory.

`$ cd jan/memory`

#### To navigate directly to a directory, use <strong>cd </strong> with the directory's path as an argument. Here, <strong> cd jan/memory/ </strong> command navigates directly to the <strong> jan/memory </strong> directory.

## CD ..

`$ cd ..`

#### To move up one directory, use  <strong> cd .. </strong> Here, <strong> cd .. </strong> navigates up from jan/memory/ to jan/.

## CP

`$ cp ada_lovelace.txt historical/`

#### <strong>strong > cp</strong> copies files or directories. Here, we copy the file ada_lovelace.txt and place it in the <strong>historical/</strong> directory

# WILDCARDS (*)

`$ cp * satire/`

#### The wildcard  <strong> * </strong> selects all of the files in the current directory. The above example will copy all of the files in the current directory to the directory called satire. There are other types of wildcards, too, which are beyond the scope of this glossary.

`$ cp m*.txt scifi/`

#### Here, <strong> m*.txt </strong> selects all files in the working directory starting with <strong>"m"</strong> and ending with <strong>".txt"</strong>, and copies them to <strong>scifi/</strong>.

# ENV

`env`

#### The <strong> env </strong> command stands for <strong>"environment" </strong>, and returns a list of the environment variables for the current user.

# ENV | GREP VARIABLE

`env | grep PATH`

#### <strong> env | grep PATH </strong> is a command that displays the value of a single environment variable.

# EXPORT

`export USER="Jane Doe"`

#### <strong>export</strong> makes the variable to be available to all child sessions initiated from the session you are in. This is a way to make the variable persist across programs.

# GREP

`$ grep "Mount" mountains.txt`

#### <strong>grep</strong> stands for "global regular expression print". It searches files for lines that match a pattern and returns the results. It is case sensitive.

# GREP -I

`$ grep -i "Mount" mountains.txt`

#### <strong>grep -i</strong> enables the command to be case insensitive.

# GREP -R

`$ grep -R Arctic /home/ccuser/workspace/geography`

#### <strong>grep -R</strong> searches all files in a directory and outputs filenames and lines containing matched results. <strong>-R</strong> stands for "recursive".

# GREP -RL

`$ grep -Rl Arctic /home/ccuser/workspace/geography`

#### <strong>grep -Rl</strong> searches all files in a directory and outputs only filenames with matched results. <strong>-R</strong> stands for <strong>"recursive"</strong> and l stands for "files with matches".

# HOME

`$ echo $HOME`

#### <strong>The HOME</strong> variable is an environment variable that displays the path of the home directory.

# LS

`$ ls 
2014  2015  hardware.txt`

#### <strong>ls</strong> lists all files and directories in the working directory

# ls -a

`ls -a
.  ..  .preferences  action  drama comedy  genres.xt`

#### <strong>ls -a</strong> lists all contents in the working directory, including hidden files and directories

# ls -l

`ls -l
drwxr-xr-x 5  cc  eng  4096 Jun 24 16:51  action
drwxr-xr-x 4  cc  eng  4096 Jun 24 16:51  comedy
drwxr-xr-x 6  cc  eng  4096 Jun 24 16:51  drama
-rw-r--r-- 1  cc  eng     0 Jun 24 16:51  genres.txt`

#### <strong>ls -l</strong> lists all contents of a directory in long format. Here's what each column means.

# ls -t

`ls -t`

#### orders files and directories by the time they were last modified.

# MKDIR

`$ mkdir media`

#### <strong>mkdir</strong> takes in a directory name as an argument, and then creates a new directory in the current working directory. Here we used <strong>mkdir</strong> to create a new directory named <strong>media/.</strong>

# MV

`$ mv superman.txt superhero/`

#### To move a file into a directory, use <strong>mv</strong> with the source file as the first argument and the destination directory as the second argument. Here we move <strong>superman.txt</strong> into <strong>superhero/.</strong>

# NANO

`$ nano hello.txt`

#### <strong>nano</strong> is a command line text editor. It works just like a desktop text editor like TextEdit or Notepad, except that it is accessible from the the command line and only accepts keyboard input.

# PATH

`$ echo $PATH
/home/ccuser/.gem/ruby/2.0.0/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/sbin:/sbin:/bin`

#### <strong>PATH</strong> is an environment variable that stores a list of directories separated by a colon. Each directory contains scripts for the command line to execute. <strong>PATH</strong> lists which directories contain scripts.

# PWD

`$ pwd
/home/ccuser/workspace/blog`

#### <strong>pwd</strong> prints the name of the working directory

# RM

`$ rm waterboy.txt`

#### <strong>rm</strong> deletes files. Here we remove the file <strong>waterboy.txt</strong> from the file system.

# RM -R

`$ rm -r comedy`

#### <strong>rm -r</strong> deletes a directory and all of its child directories.

# SED

`$ sed 's/snow/rain/' forests.txt`

##### sed stands for <strong>"stream editor"</strong>. It accepts standard input and modifies it based on an expression, before displaying it as output data.

#### In the expression 's/snow/rain/':

#### s: stands for "substitution".
#### snow: the search string, the text to find.
#### rain: the replacement string, the text to add in place.

# SORT

`$ sort lakes.txt`

#### <strong>sort</strong> takes a filename or standard input and orders each line alphabetically, printing it to standard output.

# STANDARD ERROR

#### <strong>standard error</strong>, abbreviated as stderr, is an <strong>error</strong> message outputted by a failed process.

# SOURCE

`source ~/.bash_profile`

#### source activates the changes in <strong>~/.bash_profile</strong> for the current session. Instead of closing the terminal and needing to start a new session, source makes the changes available right away in the session we are in.

# STANDARD INPUT

#### <strong>standard input</strong>, abbreviated as stdin, is information inputted into the terminal through the keyboard or input device.


# TOUCH

`$ touch data.txt`

#### <strong>touch</strong> creates a new file inside the working directory. It takes in a file name as an argument, and then creates a new empty file in the current working directory. Here we used touch to create a new file named <strong>keyboard.txt</strong> inside the <strong>2014/dec/</strong> directory.

#### If the file exists, touch is used to update the modification time of the file

# UNIQ

`$ uniq lakes.txt`

#### <strong>uniq </strong> , short for <strong>"unique"</strong>, takes a filename or standard input and prints out every line, removing any exact duplicates.

[Reference by Codecademy](https://www.codecademy.com/articles/command-line-commands)