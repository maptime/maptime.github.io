[![Build Status](https://travis-ci.org/maptime/maptime.github.io.svg?branch=master)](https://travis-ci.org/maptime/maptime.github.io)

maptime.github.io
=================

This is the central repo of the [maptime.io](http://www.maptime.io/) website. This is a [Jekyll](https://github.com/jekyll/jekyll) site served on Github Pages. If your environment is already setup, type in your terminal (the '$' refers to your prompt):

```
$ git clone git@github.com:maptime/maptime.github.io.git
$ cd maptime.github.io
$ jekyll serve --watch
```


## Setting up your environment
Set up `git` and `jekyll`, which depend on `ruby` and `homebrew`:

**For the code snippets below, you'll want to copy everything after the $ and paste into a terminal window.**

## Install Homebrew

Paste this into terminal

 ```
 ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
 ```

Hit `Return` to start installation. 

After it finishes, make sure `brew` is configured correctly by running: 

 ```
 $ brew doctor
 ```

## Install Git

1. In terminal, run the following commands:

 ```
 brew update
 brew install git
 ```

2. Then follow the [Set Up Git](https://help.github.com/articles/set-up-git) instructions provided by GitHub to configure your github account through git.

## Install Ruby

1. MacOS comes with a built-in version of Ruby, but it's frequently out of date, and requires installing gems with `sudo`. It's better to install Ruby from homebrew:

 ```
 brew install ruby
 ```

2. Then add `/usr/local/opt/ruby/bin` to `$PATH`:

 ```
$ echo 'export PATH=/usr/local/opt/ruby/bin:$PATH' >> ~/.bash_profile
 ```

## Install Jekyll

Run the following in terminal:

 ```
$ gem install jekyll
$ gem install jekyll-feed
$ gem install rdiscount
 ```

## Clone this repo

Clone the [maptime.github.io repo](http://github.com/maptime/maptime.github.io) on your computer. Then switch into that file directory.

```
$ git clone -b master git@github.com:maptime/maptime.github.io.git
$ cd maptime.github.io
```
