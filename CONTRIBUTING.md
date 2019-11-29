# Contributing

Please follow this contributing guideline.
## Commit Messages

All commits should contain a message based on the [Conventional Commits specification](https://conventionalcommits.org/) and [Angular's commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

### Message Specification

```
<type>: <subject>

<body>

BREAKING CHANGE: <break>
```

### `<type>` REQUIRED

The type of commit.\
Should be one of the following:

* feat:     A new feature
* fix:      A bug fix
* build:    Changes that affect the build
* docs:     Documentation only changes
* refactor: A code change that neither fixes a bug nor adds a feature
* test:     Adding missing tests or correcting existing tests
* chore:    All other code changes


### `<subject>` REQUIRED

The "what" of the commit.\
Must be under 50 characters.\
Use the imperative, present tense.\
Do not capitalize.\
Do not end with a period.\
Do not include PR, issue or other ticket numbers.

### `<body>`

The "why" of the commit.\
Must be preceded by a blank line if included.\
Can include PR, issue.\

### `<break>` OPTIONAL

The description of any breaking changes in the commit.\
Must be preceded by a blank line if included.\
Remove entire line if unused.


## Merging into `master`

All merges must use rebase, squash, [fast-forward](https://git-scm.com/docs/git-merge#git-merge---ff-only) or any other technique that results in a clean, linear Git history without merge commits. See [Merging with GitHub](#merging-with-github) for things to watch out for.
### Merging with GitHub

Many developers prefer to squash merge with GitHub due to its simplicity. Unfortunately, the UI will suggest a default commit message that is incompatible with our standard. When using the GitHub UI to merge, please take the time to review and clean up the message. For example, ensure that:

* The `<type>` and `<subject>` are correct.
* Any PR and Jira numbers have been removed from the title.
* The title is not duplicated in the commit body.

## General developer workflow
This is a workflow that was developed by trial and error and it is, of course, up to each developer to use whatever suits him. There are, however some things, which are not debatable:
* Do not *ever* create a new branch in the [luviodevelopment/luvio](https://github.com/luviodevelopement/luvio) repository itself. It would result in builds being triggered for no reason plus it would make a mess in the repository. Instead create a fork of this repository and do whatever you want in there.
* Any new code that goes into `master` must pass a code review. Create a branch (further called a *feature branch*) in your fork and then create a pull request. 

### Recommended local Git setup
It is recommended to use the 'shared upstream and private origin' described [here](https://help.github.com/en/articles/fork-a-repo).
In short, you have two remote repositories
* `upstream` - Points to [luviodevelopment/luvio](https://github.com/luviodevelopement/luvio)
* `origin` - Points to your fork. You can do literally anything here.

To set your local `master` branch to track `upstream/master`, do
```bash
git checkout --track upstream/master
```
This will ensure that your local `master` is always in sync with the latest changes simply by executing `git pull --rebase` (it is not advisable to execute just `git pull`, because it can create merge commits for you, which we do not want).
Creating a new feature branch is also only a matter of executing `git checkout -b <new-branch-name>` while in `master`.

During your development, you then always push (or do whatever you want) to `origin <your-branch>` and only push to `upstream` when merging into `master`.


### The workflow
Based on these ideas, we can form a general workflow that will help avoid complications and surprises in the day-to-day feature development.

1. Develop your feature
    1. `git checkout -b <your-feature-branch>` to create your feature branch
    1. Develop your feature and `git push origin <your-feature-branch>` until development is complete. It is a good idea to create the first commit according to the [message specification](#message-specification).
1. Pass through code review
    1. Go to [luviodevelopment/luvio](https://github.com/luviodevelopement/luvio) and create a pull request from your branch to master. Give as much info as reasonable and append the ticket number in brackets to the PR name. Ideally, notify team members in Slack that a new PR has been created and request review.
    1. During the iterations of the PR, always first make sure that `lint`, `flow` and all tests pass before pushing anything more into the branch. It saves time, trust me.
1. Merge the feature into codebase - this will have the form of a cookbook.
    1. Checkout `master` and pull to have the latest changes.
    1. Checkout your feature branch and `git rebase master -i` it. Squash all the commits except for the first one, which should contain the message formatted according to message specification. Do not forget to squash the commits, otherwise `master` will be an eye sore indeed.
    1. Push the feature branch into your fork.
    1. Checkout `master` and `git merge <your-feature-branch> --ff-only`
    1. `git push upstream master` to finish the merge into Git.
    