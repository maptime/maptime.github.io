---
layout: default
title: Setting up your chapter's website!
description: "Setting up your chapter's website is a snap. Check this guide for getting a page up and running with Maptime."

---
# Setting up your chapter's website
![toronto-page](/img/toronto-page.png)

There are now two great ways to quickly integrate your Chapter with the Maptime community:

1. Manage a page in a Maptime's sub-directory
2. Manage your own Github repository

In this guide, we'll cover managing your page from a directory within the Maptime repo. To manage your chapter's site from its own repo, check out the [Starter template](https://github.com/maptime/starter) or just make your own repo within the Maptime organization. Just file an [issue](https://github.com/maptime/maptime.github.io/issues/new) and we'll set you up with a repo and admin team.

### Making a chapter sub-directory

To manage a single page on Maptime's site requires a little git know-how but we're here to help. If you're totally new to git and Github, check out their awesome [guides](https://guides.github.com/) for help. If you're ready to dive in, follow these steps to start your own page inside Maptime's repository.

1. Log into your [Github account](https://help.github.com/articles/signing-up-for-a-new-github-account/) and navigate to the [Maptime site repo](https://github.com/maptime/maptime.github.io).
1. Click the `Fork` button in the upper right to copy it to your own account. 
![start-fork](/img/start-fork.png)
Forking a site means you're making a copy of it to your account and the origin repo maintains a connection to the changes you make to your site. The genius of this is that you can make a __Pull Request__ (i.e requesting that the site you forked from _pull_ the changes you made). Take a second to let that sink in ;)
1. Once you have a fork of the site, create a folder for your chapter.
![start-add-folder](/img/start-add-folder.png)
Keep things simple by naming your folder after your city. 
1. Add a file named `index.html` and copy contents from the [/nullisland/index.html](https://github.com/maptime/maptime.github.io/blob/master/nullisland/index.html) file for the template into your new file.
1. Modify your details.
1. When you're finished, commit the new file (it's like saving it) and add a commit message like '_Adds new Maptime chapter for Null Island!_'
1. Once committed, go back to the root directory of your repo and make a __Pull Request__ (aka PR) by clicking the green button to the left of your repo's branch name.
![start-pull](/img/start-pull.png)
1. A new page appears where you can review your changes.
1. Make sure you are making a PR from your repo's branch to the maptime.github.io master branch.
![start-compare](/img/start-compare.png)
1. Add a nice, relevant message regarding the changes you're proposing.
1. Finally, click the big shiny green __Create Pull Request__ button. It's ok, you won't break anything. Extra points if you tag an admin with Maptime to notify them of changes (e.g. @geografa).
![start-pr-msg](/img/start-pr-msg.png)

Someone from the Maptime admin team will review changes and either merge them in or comment back with questions or suggested modifications. If changes are requested before merging, simply make the changes in your file and commit the changes. No need to make another PR if the one you made is still open. Neat huh? Good luck and as always create an [issue](https://github.com/maptime/maptime.github.io/issues/new) with your questions, send us a [tweet](https://twitter.com/MaptimeHQ), or find us on the [Slack](https://maptime.slack.com/messages/website-admin/) chat channel for more help.

<iframe src="//player.vimeo.com/video/110047746" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
_[Adding a Maptime Chapter](http://vimeo.com/98781289)_
