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
Example 
If you want arrow navigation add in the following anywhere in the code, note that it is not inside the same block as our other slider-nav content.
`You can also remove the slider-nav with the clickable links ( not the prev / next ) to have just the arrow navigation`
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