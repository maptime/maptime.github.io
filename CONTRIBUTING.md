Contributing to Maptime.io
==========================

We'd love for you to contribute and help make [Maptime.io](http://maptime.io) better! Here are some guidelines we'd like you to follow:

Code for Conduct
----------------

Help us keep Maptime open and inclusive. Please read and follow our [Code of Conduct](https://github.com/maptime/code-of-conduct/blob/master/code-of-conduct.md).

Need a question answered?
-------------------------

If you have questions on contributing to Maptime.io, direct them to one of the following:

- We're on Twitter at [@maptimeHQ](http://twitter.com/maptimehq)
- Email us at [hello [at] maptime.io](mailto:hello@maptime.io)

Found an issue?
---------------

If you find a bug, or issue in the documentation, you can help us out by [creating a new issue](https://github.com/maptime/maptime.github.io/issues/new) on Github. Pull Requests are __always__ welcome!

Want to contribute without writing code?
----------------------------------------
Help us move the [abs-of-cartography](https://github.com/maptime/abcs-of-cartography/wiki) over to our [glossary](https://github.com/maptime/maptime.github.io/blob/master/_data/glossary.yml).  Each entry in the wiki should have an entry in the website's glossary.  The format is as follows:

```yml
# Add a term to the glossary:
- term: (string)
  definition: (html string)
  tags: (array)
  image: (optional)
    src: Filename (string) -- PLACE IMAGES IN `/img`
    alt: For screen readers (string)
```

Submitting a Pull Request
-------------------------

Before you submit your pull request consider the following guidelines:

- Search [GitHub](https://github.com/maptime/maptime.github.io/pulls) for an open or closed Pull Request
  that relates to your submission. You don't want to duplicate effort.
- Make your changes in a new git branch

     ```
     git checkout -b my-fix-branch master
     ```

- Commit your changes using a descriptive commit message

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.


- Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

- In GitHub, send a pull request to `maptime.github.io:master`.

That's it, thanks!
 
