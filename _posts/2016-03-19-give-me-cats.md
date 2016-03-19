---
layout: post
title: All the Cats
cover: cat.jpg
date:   2016-03-19 17:29:00
categories: posts
comments: true
permalink: give-me-cats
disqus_identifier: give-me-cats
---
<style>
    #browser { padding: 20px; }
    img { width: 100px; height: 100px; float: left; }
</style>

## ALL THE CATS

<button>Give me a cat</button>

<div id="cats"></div>

<script>
    var catURL = 'http://thecatapi.com/api/images/get?format=src&type=gif';
    $('button').click(function() {
        $('#cats').append(
            $('<img/>').attr('src', catURL + '&' + new Date().getTime())
        );
    })
</script>
