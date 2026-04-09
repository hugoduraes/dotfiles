# Hugo's dotfiles

## Prerequisites

Install [Homebrew](http://brew.sh):

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install [Ansible](https://www.ansible.com/get-started):

```
brew install ansible
```

Install [oh-my-zsh](https://ohmyz.sh/#install):

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Install

```
git clone https://github.com/hugoduraes/dotfiles ~/.dotfiles
cd ~/.dotfiles
ansible-playbook main.yml -l <host> // possible values: personal, work
```
