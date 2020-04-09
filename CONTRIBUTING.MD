# Contributing to vue-typeahead-bootstrau

We love pull requests from everyone. We are not necessarily experts in vue,
typeaheads, bootstrap, or anything else. We're just here to try and provide a useful
tool! So feel free to jump in too.

By participating in this project, you agree to abide by the [code of conduct].

[code of conduct]: https://github.com/mattzollinhofer/vue-typeahead-bootstrap/CODE_OF_CONDUCT.md

Here are some ways you can contribute:
* by reporting bugs
* by suggesting new features
* by writing or editing documentation
* by writing examples
* by writing code (**no patch is too small** : fix typos, add comments, clean up inconsistent whitespace)
* by refactoring code
* by discussing or closing [issues][]
* by reviewing [pull requests][]

[issues]: https://github.com/mattzollinhofer/vue-typeahead-bootstrap/issues
[pull requests]: https://github.com/mattzollinhofer/vue-typeahead-bootstrap/pulls

## Submitting an Issue

If you find a bug with this component please let us know! If you have an enhancement that
you believe would be helpful to the community, let us know!.

We use the [GitHub issue tracker][issues] to track bugs and features.

* Before submitting a bug report or feature request, check to make sure it hasn't
  already been submitted by searching for it.
* When submitting a bug report, please include detail! A [gist][] that includes a stack trace and any
  details that may be necessary to reproduce the bug.
* If you have an enhancement, please provide details about the situations you would use it.
  Additionally, provide other use cases you think would be good uses.
* Ideally, a bug report will include a pull request with failing tests, but we know not everyone can
  come with that level of technicality.

[gist]: https://gist.github.com/

### Not a Helpdesk
We wish would could help with everything, but our goal is to help build a tool and provide
it as value to the larger community. If you have specific issues with your setup and/or
configuration [stackoverflow](https://stackoverflow.com) is the more appropriate place for
that kind of question.

## Cleaning up issues

We don't think we're perfect, but find that if we don't close issues with this approach
they linger and become confusing. That doesn't help anyone!

* Issues that have no response from the submitter will be closed after 30 days.
* Issues will be closed once they're assumed to be fixed or answered. If the
  maintainer is wrong, we'll reopen it.
* If your issue *is* closed by mistake, we didn't intend to offend you, we promise!
  Pause, take and breath, and explain the issue again (like we're children :-)).
  We will happily reopen the issue.

## Submitting a Pull Request (PRs)

We use PRs for discussion and code changes. Please keep PRs on a single topic so that discussion doesn't
become too confused.

Follow the process laid out by github for working with [PRs](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Basic Steps
1. [Fork][fork] the [official repository][repo].
2. [Create a topic branch.][branch]
3. Implement your feature or bug fix.
4. Add, commit, and push your changes.
5. [Submit a pull request.][pr]

## Commits
We care about commit history. Commit messages should look as described below. There should
be as many commit as needed to well describe the change, there's a decent chance that will
end up being a single commit. It can be helpful to see a number of commits on a PR to show
different components of the work, but we'll probably squash them together at the end.

### Commit Messages (credit [Tim Pope](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)):
Here's the format we're expecting for commit messages

```
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, followed by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent
```

### Expectations
* Great commit hygiene.
* Updated CHANGELOG.md
* Tests. Please add tests if you changed code. Contributions without tests won't be accepted.
  * If you don't know how to add tests, please put in a PR and leave a comment
    asking for help. We love helping!
* Please *don't update* the package.json version, we'll do that when it gets released.

[repo]: https://github.com/mattzollinhofer/vue-typeahead-bootstrap
[fork]: https://help.github.com/articles/fork-a-repo/
[branch]: https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/
[pr]: https://help.github.com/articles/using-pull-requests/

Inspired by https://github.com/thoughtbot/factory_bot/blob/master/CONTRIBUTING.md
