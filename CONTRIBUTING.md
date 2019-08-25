# Contributing to ScripDraft 

This document will contain guidelines for contributing to the project, applicable to everyone, including project owners and team members.

## Project Board

We organize our project using a Trello board at https://trello.com/b/0qRYFokv/scripdraft.  Anyone can view it, but only team members can edit it.

## Getting Involved

If you want to become a member of our team, we could certainly use some backend talent.  We could also use some QA talent.  Contact Adam Cross for more info on that.  Adam is ScripDraft lead.  ([@adamfgcross](https://twitter.com/adamfgcross) on Twitter, Xerocross on GitHub.)  FrontEnd devs are also welcome to contact us.  Kaan [(@kaangokdemir)](https://twitter/kaangokdemir) is the frontend lead, so if you want to contribute to the frontend you should contact him.

## Guidelines for Potential New Contributors

Sorry.  I haven't really figured out how to do this yet.  See above "Getting Involved" section.

## Guidelines for Team Members

Each code change should have an associated task-card on the Trello board.  When you begin work on the new feature, if there is not a card for it already on Trello, then please create a new card with an appropriate name, something like "Add Contributing File"

The name should describe the changes, and all changes should be related to just one general theme.  It should not be a collection of unrelated changes.

When you start working on a new Trello board item, please move the card for it into the "in development" bucket.

On your local computer, always make sure your copy of the master branch is current.  You can use `git pull` to do that.  Before starting code changes, checkout the master branch and then create a new branch with a name the same as the Trello card name, but in kebab-case, like "add-contributing-file".

Make your changes only in your new branch.  You may push the new branch to remote at any time.  Do not merge the branch directly into master.  And never make any changes directly to master, even if you have write privileges.

There is a stage branch.  Stage is for previewing and testing your code in a live environment, but it is not the "production" environment.  You may directly merge your new branch into the stage branch.  Any changes you make to the stage branch will build automatically.  (Give it a few minutes.)  Then you can view the changes in a live environment at http://stage.scripdraft.com.

When you are satisfied with your changes, create a PR to merge your branch into master.  The PR should have the same name as the name of the Trello board card, like "Add Contributing File".  Raise the PR to the attention of the project owners, Adam (Xerocross) and Kaan (kaangokdemir).

When you have raised the PR, please move the Tello card item to the "In Review" list.

From here, project owners will review the PR.

## Project Owners

The project owners are Adam [(@xerocross)](https://www.github.com/xerocross) and Kaan [(@kaangokdemir)](https://github.com/kaangokdemir).
=======
