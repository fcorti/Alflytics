Alflytics
===

Alflytics is the Open Source Business Intelligence (OSBI) solution over [Alfresco content and processes](http://www.alfresco.com), built using the [Pentaho platform](http://www.pentaho.com). With Alflytics is provided a pure Business Intelligence solution to extract, store and enquiry content data (documents, folders, metadata, tags, categories, etc.), audit trail and processes at a very detailed level, with the goal to be easily customized and extended with other entities coming from external Services like: ERP, CRM, custom Applications, etc.

Alflytics uses the data coming from [Alfresco platform](http://www.alfresco.com), the ability of the [Pentaho platform](http://www.pentaho.com) to build reports, dashboards and free analysis, and the latest techniques in Data Warehousing, to define a complete set of analytics and insights on top of your preferred ECM+BPM solution.

<div style="text-align:center"><img src="https://github.com/fcorti/Alflytics/blob/master/static/custom/img/alflytics.png" width="200px" /></div>

# Technical details

This project develops a Pentaho Sparkl Application to be released into an installation of the Pentaho Analytics platform.
To deploy it, please follow the instructions below assuming you have a Pentaho Analytics platform v7.0 available in the `<pentaho-server>` folder.

Open a terminal and execute the commands detailed below.

    cd ~
    git clone https://github.com/fcorti/alflytics.git
    cd alflytics
    mkdir <pentaho-server>/pentaho-solutions/system/Alflytics
    cp -R * <pentaho-server>/pentaho-solutions/system/Alflytics
    rm -rf <pentaho-server>/pentaho-solutions/system/Alflytics/build
    cd <pentaho-server>
    ./start-pentaho.sh

# Feedback and support

For more informations about the project, support or further details, go throught the author's website at [fcorti.com/alflytics](http://fcorti.com/alflytics/).


