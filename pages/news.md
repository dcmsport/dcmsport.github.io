---
layout: page-fullwidth
show_meta: false
title: "Notícias"
subheadline: "Quais são as novidades?"
permalink: "/news/"
---

<div class="row">
    
    <div class="medium-8 columns">
        <ul class="no-bullet">
            {% for post in site.posts limit:3 %}
              <li class="b60">
                <span class="date"><strong>{{ post.date | date: '%d/%m/%Y' }}</strong></span>
                <h3 class="no-margin"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
                {% if post.header.image %}
                    <a href="{{ post.url | prepend: site.baseurl }}">
                        <img src="{{ site.urlimg }}/{{ post.header.image }}" alt="{{ post.title }}">
                    </a>
                {% endif %}
                <p class="description">{% if post.description %}{{ post.description | strip_html | strip_newlines | truncate: 250 }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 250 }}{% endif %}</p>
              </li>
            {% endfor %}
        </ul>
    </div>

    <div class="medium-4 columns">
        <div class="panel radius">
            <ul>
                {% for post in site.posts %}
                    <li>
                        <a href="{{ post.url | prepend: site.baseurl }}">
                            {{ post.date | date: '%d/%m/%Y' }} - {{ post.title }}
                        </a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</div>