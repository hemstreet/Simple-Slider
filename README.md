[View Demo](http://htmlpreview.github.io/?https://github.com/hemstreet/Simple-Slider/blob/master/index.html)

Slider with clickable navigation
===
This is an example of a basic unstyled slider. Ensure that the data-slider-nav-id attributes line up as well as te data-slider-nav-key to the appropriate slide.

```
<div class="slider-content" data-slider-nav-id="{{uniqueSlideId}}">
    <div data-slider-nav-key="slide-1">
        <h2>Slide 1 Content</h2>
    </div>
    <div data-slider-nav-key="slide-2">
        <h2>Slide 2 Content</h2>
    </div>
    <div data-slider-nav-key="slide-3">
        <h2>Slide 3 Content</h2>
    </div>
    <div data-slider-nav-key="slide-4">
        <h2>Slide 4 Content</h2>
    </div>
</div>

<div class="slider-nav auto-open" data-slider-nav-id="{{uniqueSlideId}}">
    <a data-slider-nav-key="slide-1">Slide 1</a>
    <a data-slider-nav-key="slide-2">Slide 2</a>
    <a data-slider-nav-key="slide-3">Slide 3</a>
    <a data-slider-nav-key="slide-4">Slide 4</a>
</div>
```

Slider with directional arrows
===
```

<div class="slider-content" data-slider-nav-id="{{uniqueSlideId}}">
    <div data-slider-nav-key="slide-1">
        <h2>Slide 1 Content</h2>
    </div>
    <div data-slider-nav-key="slide-2">
        <h2>Slide 2 Content</h2>
    </div>
    <div data-slider-nav-key="slide-3">
        <h2>Slide 3 Content</h2>
    </div>
    <div data-slider-nav-key="slide-4">
        <h2>Slide 4 Content</h2>
    </div>
</div>

<ul class="slider-nav" data-slider-nav-id="{{uniqueSlideId}}">
    <a class="slider-arrow prev" href="#" data-slider-nav-direction="prev">Previous</a>
    <a class="slider-arrow next" href="#" data-slider-nav-direction="next">Next</a>
</ul>
```

Slider with both
===

Note that the arrows and the clickable links are not inside the same block in our slider-nav content.
```
<div class="slider-content" data-slider-nav-id="{{uniqueSlideId}}">
    <div data-slider-nav-key="slide-1">
        <h2>Slide 1 Content</h2>
    </div>
    <div data-slider-nav-key="slide-2">
        <h2>Slide 2 Content</h2>
    </div>
    <div data-slider-nav-key="slide-3">
        <h2>Slide 3 Content</h2>
    </div>
    <div data-slider-nav-key="slide-4">
        <h2>Slide 4 Content</h2>
    </div>
</div>

<ul class="slider-nav" data-slider-nav-id="{{uniqueSlideId}}">
    <a class="slider-arrow prev" href="#" data-slider-nav-direction="prev">Previous</a>
    <a class="slider-arrow next" href="#" data-slider-nav-direction="next">Next</a>
</ul>

<div class="slider-nav auto-open" data-slider-nav-id="{{uniqueSlideId}}">
    <a data-slider-nav-key="slide-1">Slide 1</a>
    <a data-slider-nav-key="slide-2">Slide 2</a>
    <a data-slider-nav-key="slide-3">Slide 3</a>
    <a data-slider-nav-key="slide-4">Slide 4</a>
</div>
```