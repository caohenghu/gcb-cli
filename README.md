# gcb-cli

It means `git checkout -b`

## Install

```sh
$ npm i -g @caohenghu/gcb-cli
```

## Usage

```sh
$ gcb-cli mmm
```

Will create a formatted branch like this `20221107_ygp-mall-pc-static_mmm`, the format is `date_directory_name`.

![preview](https://cdn.staticaly.com/gh/caohenghu/resource@master/gcb-cli.6dc0y0j6cj40.svg)

## Windows

1. If you are using `git bash` or `cmd`, you should do nothing.

2. But if you are using `PowerShell`, you should do this as `Administrator`. And it is the default `shell` of the `Visual Studio Code` on `Windows 10`. [detail description](https://go.microsoft.com/fwlink/?LinkID=135170)

```sh
Set-ExecutionPolicy RemoteSigned
```
