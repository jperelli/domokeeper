# Domokeeper server

domokeeper server: a pluggable domotic control server for Raspberry Pi 2/3

## Installation

ssh into your raspberry pi ([How to config ssh without UTP cable?](http://jperelli.com.ar/post/2017/02/08/how-to-configure-raspbian-raspberry-pi-wifi/)) and run

    sudo apt install npm
    sudo npm install -g domokeeper
    ln -s /usr/bin/nodejs /usr/bin/node  # debian buggy naming

## Run

    domokeeper

Get help on man page

    man domokeeper

## Raspbian img with domokeeper preinstalled

This is work in progress, it is not yet done.

## How to add functionality

Make a plugin.

[There is a skeleton plugin to be forked/copied as a starting point here](https://github.com/jperelli/domokeeper-plugin-skeleton)

See the readme over there to guide you making one in no more than 5 minutes. It's easy, so go ahead and do it!

# Contributors

 - Julian Perelli

# License

GNU AGPL v3
