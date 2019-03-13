---
# Page settings
layout: homepage # Choose layout: "default", "homepage" or "documentation-archive"
title: # Define a title of your page
description: # Define a description of your page
keywords: # Define keywords for search engines

# Hero section
hero:
    title: Hero section — Title
    text: Hero section — Text
    background_image: # Paste image URL to display image in background of hero section
    buttons: # Add buttons below, there are examples with all available options
        - label: Button — Filled with icon
          url: http://example.com
          external_url: true # Set to "false" if you're pointing to inner page
          style: filled # Choose style: "filled" or "bordered"
          icon: github # Choose from 266 icons in "Feather" icon set, list of all icons is available here - https://feathericons.com
        - label: Button — Bordered with icon
          url: /documentation/project-1/index-doc
          external_url: false
          style: bordered
          icon: gitlab
    download_link: # Set small download link placed below buttons
        label: Download — v4.0.0
        url: https://example.com

# Features section
features:
    rows: # Add feature rows below, there are examples with all available options
        - title: Documentación de proyectos para Telepizza
          description: Desarrollado por Vector ITC Group
          grid: # Add feature grid items below, there are examples with all available options
              - title: Proyecto 1
                description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iste voluptas sunt eligendi sit dolorem blanditiis nostrum, fuga ducimus enim? Ut temporibus.
                icon: file-text # Choose from 266 icons in "Feather" icon set, list of all icons is available here - https://feathericons.com
                url: /documentation/project-1/index-doc
              - title: Proyecto 2
                description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iste voluptas sunt eligendi sit dolorem blanditiis nostrum, fuga ducimus enim? Ut temporibus.
                icon: file-text
                url: /documentation/project-2/index-doc
              - title: Proyecto 3
                description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iste voluptas sunt eligendi sit dolorem blanditiis nostrum, fuga ducimus enim? Ut temporibus.
                icon: file-text
                url: /documentation/project-3/index-doc
    footer: # Set features section footer variables
        title: Features footer — Title
        description: Features footer — Description
        buttons: # Add buttons below, there are examples with all available options
            - label: Button — Filled
              url: http://example.com
              external_url: true # Set to "false" if you're pointing to inner page
              style: filled # Choose style: "filled" or "bordered"
              icon: # Choose from 266 icons in "Feather" icon set, list of all icons is available here - https://feathericons.com
            - label: Button — Bordered
              url: /documentation
              external_url: false
              style: bordered
              icon:
---
