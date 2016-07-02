var _popUp = {
    status: false,
    options: {
        'parent': 'body',
        'content': '<div>This is a popup content.</div>',
        'timeout': false,
        'css': {
            'opacity': '0.5',
            'bgcolor': 'gray'
        }
    },
    setOptions: function(options) {
        if (options.opacity) {
            this.options.css.opacity = options.opacity;
        }

        if (options.bgcolor) {
            this.options.css.bgcolor = options.bgcolor;
        }

        if (options.content) {
            this.options.content = options.content;
        }
    },
    getFramceCSS: function() {
        return [
            'position: fixed',
            'top: 50%',
            'left: 50%'
        ].join(';');
    },
    getOverlayCSS: function() {
        return [
            'background-color: ' + this.options.css.bgcolor,
            'width: 100%',
            'height: 100%',
            'position: fixed',
            'left: 0',
            'top: 0',
            'opacity: ' + this.options.css.opacity
        ].join(';');
    },
    getHTML: function() {
        var html = '<div class="_popUpOverlay" style="' + this.getOverlayCSS() + '"></div>';
        return html += '<div class="_popUpFrame" style="' + this.getFramceCSS() + '">' + this.options.content + '</div>'
    },
    countContentSize: function() {
        var frameElement = document.querySelector('._popUpFrame');
        frameElement.style.marginLeft = '-' + frameElement.offsetWidth / 2 + 'px';
        frameElement.style.marginTop = '-' + frameElement.offsetHeight / 2 + 'px';

    },
    open: function(options) {
        if (typeof options !== 'undefined') {
            this.setOptions(options);
        }
        this.status = true;
        var holderElement = document.createElement('div');
        holderElement.classList.add('_popUp');
        holderElement.innerHTML = this.getHTML();
        document.querySelector(this.options.parent).appendChild(holderElement);
        this.addListener();
        this.countContentSize();
    },
    close: function() {
        this.status = false;
        console.log(this);
        document.querySelector(this.options.parent + ' ._popUp').remove();
    },
    addListener: function() {
        if (typeof this.eventListenerOn === 'undefined') {
            this.eventListenerOn = true;
            document.addEventListener('keydown', function(event) {
                if (this.status === true) {
                    if (event.keyCode === 27) {
                        this.close();
                    };
                }
            }.bind(this));
        }

        document.querySelector('._popUpOverlay').addEventListener('click', this.close.bind(this));

        var iframeElement = document.querySelector('._popUp iframe');
        if (iframeElement !== null) {
            iframeElement.onload = this.countContentSize();
        }
    }
};
