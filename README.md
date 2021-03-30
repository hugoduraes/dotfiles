# Hugo's dotfiles

## Prerequisites

Install [Homebrew](http://brew.sh):

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install [Ansible](https://www.ansible.com/get-started):

```
brew install ansible
```

Install [oh-my-zsh](https://ohmyz.sh/#install):

```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Install

```
git clone https://github.com/hugoduraes/dotfiles ~/.dotfiles
cd ~/.dotfiles
./install <host> // possible values: personal, work
```
