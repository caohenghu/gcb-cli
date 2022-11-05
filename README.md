# gcb-cli

It means `git checkout -b`.

## Install

```sh
npm i -g @caohenghu/gcb-cli
```

## Usage

```sh
gcb-cli zzz
```

Will create a formatted branch like this `20221104_ygp-mall-pc-static_zzz`, the format is `date_directory_name`.

![preview](https://s2.loli.net/2022/11/05/rK9q1sSz35LUnbQ.gif)

## Windows

1. If you are using `git bash` or `cmd`, you should do nothing.

2. But if you are using `PowerShell`, you should do this as `Administrator`. And it is the default `shell` of the `Visual Studio Code` on `Windows 10`. [detail description](https://go.microsoft.com/fwlink/?LinkID=135170)

```sh
Set-ExecutionPolicy RemoteSigned
```
