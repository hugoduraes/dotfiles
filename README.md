# Hugo's dotfiles

## Prerequisites

Install [Homebrew](http://brew.sh):

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install [Homebrew Cask](https://caskroom.github.io):

```
brew tap caskroom/cask
```

Install [Ansible](https://www.ansible.com/get-started):

```
brew install ansible
```

## Install

```
git clone https://github.com/hugoduraes/dotfiles ~/.dotfiles
cd ~/.dotfiles
./install <host> // possible values: personal, work
```
