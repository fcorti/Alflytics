Alflytics - Pentaho v7.0 Application
===

This project develops a Pentaho sparkl application to be released into an installation of the Pentaho BA Server.
To deploy it, please follow the instructions below assuming you have a Pentaho BA Server v7.0 available in the <pentaho-server> folder.

Open a terminal and execute the commands detailed below.

    cd ~
    git clone https://github.com/fcorti/alflytics.git
    cd alflytics/Alflytics-App-Pentaho-v7
    mkdir <pentaho-server>/pentaho-solutions/system/Alflytics
    cp -R * <pentaho-server>/pentaho-solutions/system/Alflytics
    rm -rf <pentaho-server>/pentaho-solutions/system/Alflytics/build
    cd <pentaho-server>
    ./start-pentaho.sh

For more informations:
http://fcorti.com/alflytics/
