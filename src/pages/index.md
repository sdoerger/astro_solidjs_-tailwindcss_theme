---
layout: ../layouts/Default.astro
setup: |
  import InfoCard from '../components/Home/InfoCard.tsx'
  import Quote from '../components/Home/Quote.tsx'
  import Steps from '../components/Home/Steps.tsx'
navTitle: "Start"
rank: 1
companyName: "Max Mustermann"
title: "Zusammen legen wir die Steine für Ihre Zukunft"
subtitle: "Ich helfen bei Ihrer Finanz- und Karriere-Planung."
client: Self
seoTitle: "Max Mustermann – Finanzberatung"
description: |
  We built an unofficial Mars Rover Landing site in celebration of NASA’s Perseverance Rover.
tags:
  - consulting
  - finance
  - career
TheFooter:
    social:
        - { "name": "LinkedIn", "link": "https://www.twitter.com/adsf" }
        - { "name": "Xing", "link": "https://www.twitter.com/adsf" }
        - { "name": "Instagram", "link": "https://www.twitter.com/adsf" }
    company: 
    - { "name": "Über mich", "link": "/ueber" }
    - { "name": "Impressum", "link": "/impressum" }
    - { "name": "Datenschutz", "link": "/datenschutz" }
    contact: 
     - { "name": "max@mustermann.net", "link": "mailto:max@mustermann.net" }
     - { "name": "+49 (0) 551 / 12345", "link": "phone:+4955112345" }
InfoCard: 
    title: "We are humans"
    subtitle: "We could work together"
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam autem, a recusandae vero praesentium qui impedit doloremque molestias."
    items: 
        - {
        title: "Made with love",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus labor."
        }
        - {
        title: "It's very easy to build",
        description: "Aliquam nesciunt autem voluptatum obcaecati magnam, ducimus mollitia consequuntur vero quam eaque asperiores debitis neque iure temporibus pariatur aut."
        }
Quote:
    title: "If we work all together"
    subtitle: "consectetur adipisicing elit. Consectetur atque molestiae omnis excepturi enim!"
Steps:
    items: 
        - {
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus labor."
        }
        - {
        description: "Aliquam nesciunt autem voluptatum obcaecati magnam."
        }
        - {
        description: " Ducimus mollitia consequuntur vero quam eaque asperiores debitis neque iure temporibus pariatur aut."
        }
---

<InfoCard
    title={frontmatter.InfoCard.title}
    subtitle={frontmatter.InfoCard.subtitle}
    description={frontmatter.InfoCard.description}
    items={frontmatter.InfoCard.items}
/>

<Quote
    title={frontmatter.Quote.title}
    subtitle={frontmatter.Quote.subtitle}
/>

<Steps items={frontmatter.Steps.items} />
