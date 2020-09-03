// Polyfill CSSStyleSheet constructor (Firefox):

//ID des curseurs selectionner sur le graphique 



// Data:
const data = {};
data.complementaryMatching = [ // On va stocker tout ça dans la propriété complementaryMatching par exemple.
    {
        λ: 493,
    },
    {
        λ: 502,
    },
    {
        λ: 612,
    },
    // Les longueurs d'onde qui t’intéresse dans des objets. Ajoutes en autant que nécessaire (32, si j'ai bien compris.)
]

data.colorMatching = [{
    λ: 380, // Wavelength
    'x(λ)': 0.001368, // Function x (CIE 1964)
    'y(λ)': 0.000039, // Function y (CIE 1964)
    'z(λ)': 0.006450 // Function z (CIE 1964)
}, {
    λ: 385,
    'x(λ)': 0.002236,
    'y(λ)': 0.000064,
    'z(λ)': 0.010550
}, {
    λ: 390,
    'x(λ)': 0.004243,
    'y(λ)': 0.000120,
    'z(λ)': 0.020050
}, {
    λ: 395,
    'x(λ)': 0.007650,
    'y(λ)': 0.000217,
    'z(λ)': 0.036210
}, {
    λ: 400,
    'x(λ)': 0.014310,
    'y(λ)': 0.000396,
    'z(λ)': 0.067850
}, {
    λ: 405,
    'x(λ)': 0.023190,
    'y(λ)': 0.000640,
    'z(λ)': 0.110200
}, {
    λ: 410,
    'x(λ)': 0.043510,
    'y(λ)': 0.001210,
    'z(λ)': 0.207400
}, {
    λ: 415,
    'x(λ)': 0.077630,
    'y(λ)': 0.002180,
    'z(λ)': 0.371300
}, {
    λ: 420,
    'x(λ)': 0.134400,
    'y(λ)': 0.004000,
    'z(λ)': 0.645600
}, {
    λ: 425,
    'x(λ)': 0.214800,
    'y(λ)': 0.007300,
    'z(λ)': 1.039100
}, {
    λ: 430,
    'x(λ)': 0.283900,
    'y(λ)': 0.011600,
    'z(λ)': 1.385600
}, {
    λ: 435,
    'x(λ)': 0.328500,
    'y(λ)': 0.016840,
    'z(λ)': 1.623000
}, {
    λ: 440,
    'x(λ)': 0.348300,
    'y(λ)': 0.023000,
    'z(λ)': 1.747100
}, {
    λ: 445,
    'x(λ)': 0.348100,
    'y(λ)': 0.029800,
    'z(λ)': 1.782600
}, {
    λ: 450,
    'x(λ)': 0.336200,
    'y(λ)': 0.038000,
    'z(λ)': 1.772100
}, {
    λ: 455,
    'x(λ)': 0.318700,
    'y(λ)': 0.048000,
    'z(λ)': 1.744100
}, {
    λ: 460,
    'x(λ)': 0.290800,
    'y(λ)': 0.060000,
    'z(λ)': 1.669200
}, {
    λ: 465,
    'x(λ)': 0.251100,
    'y(λ)': 0.073900,
    'z(λ)': 1.528100
}, {
    λ: 470,
    'x(λ)': 0.195400,
    'y(λ)': 0.090980,
    'z(λ)': 1.287600
}, {
    λ: 475,
    'x(λ)': 0.142100,
    'y(λ)': 0.112600,
    'z(λ)': 1.041900
}, {
    λ: 480,
    'x(λ)': 0.095640,
    'y(λ)': 0.139000,
    'z(λ)': 0.813000
}, {
    λ: 485,
    'x(λ)': 0.057950,
    'y(λ)': 0.169300,
    'z(λ)': 0.616200
}, {
    λ: 490,
    'x(λ)': 0.032010,
    'y(λ)': 0.208000,
    'z(λ)': 0.465200
}, {
    λ: 495,
    'x(λ)': 0.014700,
    'y(λ)': 0.258600,
    'z(λ)': 0.353300
}, {
    λ: 500,
    'x(λ)': 0.004900,
    'y(λ)': 0.323000,
    'z(λ)': 0.272000
}, {
    λ: 505,
    'x(λ)': 0.002400,
    'y(λ)': 0.407300,
    'z(λ)': 0.212300
}, {
    λ: 510,
    'x(λ)': 0.009300,
    'y(λ)': 0.503000,
    'z(λ)': 0.158200
}, {
    λ: 515,
    'x(λ)': 0.029100,
    'y(λ)': 0.608200,
    'z(λ)': 0.111700
}, {
    λ: 520,
    'x(λ)': 0.063270,
    'y(λ)': 0.710000,
    'z(λ)': 0.078250
}, {
    λ: 525,
    'x(λ)': 0.109600,
    'y(λ)': 0.793200,
    'z(λ)': 0.057250
}, {
    λ: 530,
    'x(λ)': 0.165500,
    'y(λ)': 0.862000,
    'z(λ)': 0.042160
}, {
    λ: 535,
    'x(λ)': 0.225700,
    'y(λ)': 0.914900,
    'z(λ)': 0.029840
}, {
    λ: 540,
    'x(λ)': 0.290400,
    'y(λ)': 0.954000,
    'z(λ)': 0.020300
}, {
    λ: 545,
    'x(λ)': 0.359700,
    'y(λ)': 0.980300,
    'z(λ)': 0.013400
}, {
    λ: 550,
    'x(λ)': 0.433400,
    'y(λ)': 0.995000,
    'z(λ)': 0.008750
}, {
    λ: 555,
    'x(λ)': 0.512100,
    'y(λ)': 1.000000,
    'z(λ)': 0.005750
}, {
    λ: 560,
    'x(λ)': 0.594500,
    'y(λ)': 0.995000,
    'z(λ)': 0.003900
}, {
    λ: 565,
    'x(λ)': 0.678400,
    'y(λ)': 0.978600,
    'z(λ)': 0.002750
}, {
    λ: 570,
    'x(λ)': 0.762100,
    'y(λ)': 0.952000,
    'z(λ)': 0.002100
}, {
    λ: 575,
    'x(λ)': 0.842500,
    'y(λ)': 0.915400,
    'z(λ)': 0.001800
}, {
    λ: 580,
    'x(λ)': 0.916300,
    'y(λ)': 0.870000,
    'z(λ)': 0.001650
}, {
    λ: 585,
    'x(λ)': 0.978600,
    'y(λ)': 0.816300,
    'z(λ)': 0.001400
}, {
    λ: 590,
    'x(λ)': 1.026300,
    'y(λ)': 0.757000,
    'z(λ)': 0.001100
}, {
    λ: 595,
    'x(λ)': 1.056700,
    'y(λ)': 0.694900,
    'z(λ)': 0.001000
}, {
    λ: 600,
    'x(λ)': 1.062200,
    'y(λ)': 0.631000,
    'z(λ)': 0.000800
}, {
    λ: 605,
    'x(λ)': 1.045600,
    'y(λ)': 0.566800,
    'z(λ)': 0.000600
}, {
    λ: 610,
    'x(λ)': 1.002600,
    'y(λ)': 0.503000,
    'z(λ)': 0.000340
}, {
    λ: 615,
    'x(λ)': 0.938400,
    'y(λ)': 0.441200,
    'z(λ)': 0.000240
}, {
    λ: 620,
    'x(λ)': 0.854400,
    'y(λ)': 0.381000,
    'z(λ)': 0.000190
}, {
    λ: 625,
    'x(λ)': 0.751400,
    'y(λ)': 0.321000,
    'z(λ)': 0.000100
}, {
    λ: 630,
    'x(λ)': 0.642400,
    'y(λ)': 0.265000,
    'z(λ)': 0.000050
}, {
    λ: 635,
    'x(λ)': 0.541900,
    'y(λ)': 0.217000,
    'z(λ)': 0.000030
}, {
    λ: 640,
    'x(λ)': 0.447900,
    'y(λ)': 0.175000,
    'z(λ)': 0.000020
}, {
    λ: 645,
    'x(λ)': 0.360800,
    'y(λ)': 0.138200,
    'z(λ)': 0.000010
}, {
    λ: 650,
    'x(λ)': 0.283500,
    'y(λ)': 0.107000,
    'z(λ)': 0.000000
}, {
    λ: 655,
    'x(λ)': 0.218700,
    'y(λ)': 0.081600,
    'z(λ)': 0.000000
}, {
    λ: 660,
    'x(λ)': 0.164900,
    'y(λ)': 0.061000,
    'z(λ)': 0.000000
}, {
    λ: 665,
    'x(λ)': 0.121200,
    'y(λ)': 0.044580,
    'z(λ)': 0.000000
}, {
    λ: 670,
    'x(λ)': 0.087400,
    'y(λ)': 0.032000,
    'z(λ)': 0.000000
}, {
    λ: 675,
    'x(λ)': 0.063600,
    'y(λ)': 0.023200,
    'z(λ)': 0.000000
}, {
    λ: 680,
    'x(λ)': 0.046770,
    'y(λ)': 0.017000,
    'z(λ)': 0.000000
}, {
    λ: 685,
    'x(λ)': 0.032900,
    'y(λ)': 0.011920,
    'z(λ)': 0.000000
}, {
    λ: 690,
    'x(λ)': 0.022700,
    'y(λ)': 0.008210,
    'z(λ)': 0.000000
}, {
    λ: 695,
    'x(λ)': 0.015840,
    'y(λ)': 0.005375,
    'z(λ)': 0.000000
}, {
    λ: 700,
    'x(λ)': 0.011360,
    'y(λ)': 0.004102,
    'z(λ)': 0.000000
}, {
    λ: 705,
    'x(λ)': 0.008111,
    'y(λ)': 0.002929,
    'z(λ)': 0.000000
}, {
    λ: 710,
    'x(λ)': 0.005790,
    'y(λ)': 0.002091,
    'z(λ)': 0.000000
}, {
    λ: 715,
    'x(λ)': 0.004109,
    'y(λ)': 0.001484,
    'z(λ)': 0.000000
}, {
    λ: 720,
    'x(λ)': 0.002899,
    'y(λ)': 0.001047,
    'z(λ)': 0.000000
}, {
    λ: 725,
    'x(λ)': 0.002049,
    'y(λ)': 0.000740,
    'z(λ)': 0.000000
}, {
    λ: 730,
    'x(λ)': 0.001440,
    'y(λ)': 0.000520,
    'z(λ)': 0.000000
}, {
    λ: 735,
    'x(λ)': 0.001000,
    'y(λ)': 0.000361,
    'z(λ)': 0.000000
}, {
    λ: 740,
    'x(λ)': 0.000690,
    'y(λ)': 0.000249,
    'z(λ)': 0.000000
}, {
    λ: 745,
    'x(λ)': 0.000476,
    'y(λ)': 0.000172,
    'z(λ)': 0.000000
}, {
    λ: 750,
    'x(λ)': 0.000332,
    'y(λ)': 0.000120,
    'z(λ)': 0.000000
}, {
    λ: 755,
    'x(λ)': 0.000235,
    'y(λ)': 0.000085,
    'z(λ)': 0.000000
}, {
    λ: 760,
    'x(λ)': 0.000166,
    'y(λ)': 0.000060,
    'z(λ)': 0.000000
}, {
    λ: 765,
    'x(λ)': 0.000117,
    'y(λ)': 0.000042,
    'z(λ)': 0.000000
}, {
    λ: 770,
    'x(λ)': 0.000083,
    'y(λ)': 0.000030,
    'z(λ)': 0.000000
}, {
    λ: 775,
    'x(λ)': 0.000059,
    'y(λ)': 0.000021,
    'z(λ)': 0.000000
}, {
    λ: 780,
    'x(λ)': 0.000042,
    'y(λ)': 0.000015,
    'z(λ)': 0.000000
}];

data.colorMatching.forEach(c => {
    c.x = Math.min(1, Math.max(0, c['x(λ)'] / (c['x(λ)'] + c['y(λ)'] + c['z(λ)']))); // x coordinate
    c.y = Math.min(1, Math.max(0, c['y(λ)'] / (c['x(λ)'] + c['y(λ)'] + c['z(λ)']))); // y coordinate
});
data.XYZ = {

    R: {
        λ: 655,

        X: 440.9,
        Y: 172.8,
        Z: 0.891
    },
    G: {
        λ: 502,

        X: 102.2,
        Y: 836.7,
        Z: 479.6
    },
    B: {
        λ: 390,

        X: 25.7,
        Y: 5.49,
        Z: 110.4
    },

    Couleur: {
        λ: 390,
        X: 25.7,
        Y: 5.49,
        Z: 110.4
    },
    Blanc: {
        IC: 2700_98,

        X: 711.2,
        Y: 636.4,
        Z: 190.4
    }

};
data.gamut = {
    white: {
        type: '',
        x: 0.3127,
        y: 0.3290
    },
    R: {
        λ: 655,
        x: 0.7174,
        y: 0.2812
    },
    G: {
        λ: 502,
        x: 0.0721,
        y: 0.5899
    },
    B: {
        λ: 390,
        x: 0.1818,
        y: 0.0388
    },
    Couleur: {
        λ: 390,
        x: 0.1818,
        y: 0.0388
    },
    Blanc: {
        IC: 2700_98,
        x: 0.4624,
        y: 0.4138
    }

};
data.Matrix = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.2040, 1.0570]
];
data.invMatrix = [
    [0.4124, 0.3576, 0.1805],
    [0.2126, 0.7152, 0.0722],
    [0.0193, 0.1192, 0.9505]
];

data.sRGBCompanding = {
    limits: {
        RGBToXYZ: 0.04045,
        XYZToRGB: 0.0031308
    },
    a: 12.92,
    b: 1.055,
    c: 0.055,
    d: 2.4
};


// Chart element:
window.HTMLCIEXyChart = class HTMLCIEXyChart extends HTMLElement {

    constructor() {
        super();
        this.shadowStyleSheet = new CSSStyleSheet();
        this.attachShadow({
            mode: 'open'
        }).adoptedStyleSheets = [this.shadowStyleSheet];
        this.canvas = document.createElement('canvas');
        this.shadowRoot.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.inputDiv = document.createElement('div');
        this.inputDiv.setAttribute("id","divInput");
        this.shadowRoot.appendChild(this.inputDiv);
        this.compandedCheckbox = document.createElement('input');
        this.compandedCheckbox.setAttribute('type', 'checkbox');
        this.compandedCheckbox.addEventListener('click', function () {
            this.compandedCheckbox.checked = !this.compandedCheckbox.checked;
            this.companded = !this.companded;
            that.fillInputs('companded');
        }.bind(this))
        this.compandedLabel = document.createElement('label');
        this.compandedLabel.appendChild(document.createTextNode('Compensation sRGB : '));
        this.compandedLabel.style.display='none';
        this.compandedLabel.style.color = "white";
        this.compandedLabel.appendChild(this.compandedCheckbox);
        this.inputDiv.appendChild(this.compandedLabel);
        this.inputs = {
            RGB: {
                R: document.createElement('input'),
                G: document.createElement('input'),
                B: document.createElement('input'),
            },
            xy: {
                x: document.createElement('input'),
                y: document.createElement('input'),
            },
            Y: document.createElement('input'),
        }
        this.width = 700;
        this.height = 700;
        const that = this;
        const RGBStr = 'RGB';
        const xyStr = 'xy';
        Object.values(this.inputs.RGB).forEach((input, i) => {
            input.setAttribute('type', 'number');
            input.setAttribute('min', 0);
            input.setAttribute('max', 255);
            input.setAttribute('step', 1);
            input.setAttribute('placeholder', RGBStr[i]);
            input.setAttribute('width', 30);
            input.addEventListener('input', function () {
                if (this.value > 255)
                    this.value = 255;
                else if (this.value < 0)
                    this.value = 0
                that.fillInputs('RGB');
            });
            this.inputDiv.appendChild(input);
        });
        this.inputDiv.appendChild(document.createElement('br'));
        Object.values(this.inputs.xy).forEach((input, i) => {
            input.setAttribute('type', 'number');
            input.setAttribute('min', 0);
            input.setAttribute('max', 1);
            input.setAttribute('step', 0.01);
            input.setAttribute('placeholder', xyStr[i]);
            
            input.setAttribute('width', 30);
            input._safeValue = data.gamut.white[xyStr[i]];
            input.value = input._safeValue;
            Object.defineProperty(input, 'safeValue', {
                get: function () {
                    return this._safeValue;
                },
                set: function (value) {
                    this.value = Number(value).toFixed(4);
                    if (!that.context.isPointInPath(that.λPath, that.xToX(that.inputs.xy.x.value), that.yToY(that.inputs.xy.y.value))) {
                        this.value = this._safeValue;
                        return;
                    }
                    if (this.value > 1)
                        this.value = 1;
                    else if (this.value < 0)
                        this.value = 0
                    return this._safeValue = this.value;
                }
            })
            input.addEventListener('input', function () {
                this.safeValue = this.value;
                that.fillInputs('xy');
            });
            this.inputDiv.appendChild(input);
        });
        this.inputDiv.appendChild(document.createElement('br'));
        this.inputs.Y.setAttribute('type', 'range');
        this.inputs.Y.setAttribute('min', 0);
        this.inputs.Y.setAttribute('max', 1);
        this.inputs.Y.setAttribute('value', 1);
        this.inputs.Y.setAttribute('step', 0.001);
        this.inputs.Y.setAttribute('width', 100);
        this.inputs.Y.addEventListener('input', function () {
            if (this.value > 1)
                this.value = 1;
            else if (this.value < 0)
                this.value = 0
            that.Y = this.value;
            that.fillInputs('Y');
        });
        this.inputDiv.appendChild(this.inputs.Y);
        this.pointerSpan = document.createElement('span');
        this.pointerSpan.innerText = '+';
        this.inputDiv.appendChild(document.createElement('br'));
        this.colorDiv = document.createElement('div');
        this.inputDiv.appendChild(this.colorDiv);
        document.getElementById("couleurMélange").appendChild(this.colorDiv);
        this.shadowRoot.appendChild(this.pointerSpan);
        
        this.ready = true;
        this.buildStyle();
        this.redraw();
        that.fillInputs('companded');
        return this;
    }

    // Attributes:
    static get observedAttributes() {
        return [
            'axe-free-space',
            'companded',
            'division-number',
            'graduation-frequence',
            'graduation-size',
            'height',
            'pointer',
            'show-last-grad',
            'width',
            'y',
        ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.ready)
            return;
        switch (name) {
            case 'axe-free-space':
                this.redraw();
                break;
            case 'companded':
                this.compandedCheckbox.checked = !this.compandedCheckbox.checked;
                this.redraw();
                break;
            case 'division-number':
                this.redraw();
                break;
            case 'graduation-frequence':
                this.redraw();
                break;
            case 'graduation-size':
                this.redraw();
                break;
            case 'height':
                this.canvas.setAttribute('height', newValue);
                this.redraw();
                break;
            case 'pointer':
                this.movePointer();
                break;
            case 'show-last-grad':
                this.redraw();
                break;
            case 'width':
                this.canvas.setAttribute('width', newValue);
                this.redraw();
                break;
            case 'y':
                if (this.inputs.Y.value !== newValue)
                    this.inputs.Y.value = newValue;
                this.redraw();
                break;
        }
    }

    // Attribute getters
    get axesFreeSpace() {
        const value = this.getAttribute('axe-free-space');
        return value !== null && typeof parseFloat(value) === 'number' ? parseFloat(value) : 2;
    }

    get companded() {
        return this.getAttribute('companded') !== null;
    }

    get divisionNumber() {
        const value = this.getAttribute('division-number');
        return value !== null && typeof parseFloat(value) === 'number' ? parseFloat(value) : 22;
    }

    get graduationFrequence() {
        const value = this.getAttribute('graduation-frequence');
        return value !== null && typeof parseFloat(value) === 'number' ? parseFloat(value) : 2;
    }

    get graduationSize() {
        const value = this.getAttribute('graduation-size');
        return value !== null && typeof parseFloat(value) === 'number' ? parseFloat(value) : 4;
    }

    get height() {
        return this.canvas.height;
    }

    get pointer() {
        const value = this.getAttribute('pointer');
        return value !== null && /\d(\.\d*)?:\d(\.\d*)?/.test(value) ? value.split(':') : [data.gamut.white.x, data.gamut.white.y];
    }

    get showLastGrad() {
        return this.getAttribute('show-last-grad') !== null;
    }

    get width() {
        return this.canvas.width;
    }

    get Y() {
        const value = this.getAttribute('y');
        return value !== null && typeof parseFloat(value) === 'number' ? Math.min(1, Math.max(0, parseFloat(value))) : 1;
    }

    // Attribute setters
    set axesFreeSpace(value) {
        return this.setAttribute('axe-free-space', value);
    }

    set companded(value) {
        return value ? this.setAttribute('companded', '') : this.removeAttribute('companded');
    }

    set divisionNumber(value) {
        return this.setAttribute('division-number', value);
    }

    set graduationFrequence(value) {
        return this.setAttribute('graduation-frequence', value);
    }

    set graduationSize(value) {
        return this.setAttribute('graduation-size', value);
    }

    set height(value) {
        return this.setAttribute('height', value);
    }

    set pointer(value) {
        return this.setAttribute('pointer', value);
    }

    set showLastGrad(value) {
        return value ? this.setAttribute('show-last-grad', '') : this.removeAttribute('show-last-grad');
    }

    set width(value) {
        return this.setAttribute('width', value);
    }

    set Y(value) {
        return this.setAttribute('y', value);
    }

    // Style:
    buildStyle() {
        return this.shadowStyleSheet.replaceSync(`:host {
            display: inline-block;
            position: relative;
            height: fit-content;
            width: fit-content;
        }
        
        :host > div {
            position: absolute;
            top: 0.2rem;
            right: 0.2rem;
            width: 80%;
            text-align: right;
        }
        
        :host > div > * {
            margin: 0.2rem;
        }

        :host > div > div {
            border: 1px solid black;
            float: right;
            width: ${this.width / 10}px;
            height: ${this.height / 10}px;
        }
        
        :host > span {
            position: absolute;
            transform: translate(-50%, -50%);
            pointer-events: none;
        }`);
    }

    // Canvas drawing:
    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    createΛPath() {
        let X = 0;
        let Y = 0;
        this.λPath = new Path2D();
        X = this.xToX(data.colorMatching[0].x);
        Y = this.yToY(data.colorMatching[0].y);
        let xMin = X;
        let xMax = X;
        let yMin = Y;
        let yMax = Y;
        this.λPath.moveTo(X, Y);
        data.colorMatching.slice(1).forEach(c => {
            X = this.xToX(c.x);
            Y = this.yToY(c.y);
            xMin = Math.min(xMin, X || xMin);
            xMax = Math.max(xMax, X || xMax);
            yMin = Math.min(yMin, Y || yMin);
            yMax = Math.max(yMax, Y || yMax);
            this.λPath.lineTo(X, Y)
        });
        this.λPath.closePath();
        this.λPathBounding = new DOMRect(Math.round(xMin), Math.round(yMin), Math.round(xMax - xMin), Math.round(yMax - yMin));
    }

    drawGamut() {
        this.context.strokeStyle = '#000000';
        this.context.beginPath();
        this.context.moveTo(this.xToX(data.gamut.R.x), this.yToY(data.gamut.R.y));
        this.context.lineTo(this.xToX(data.gamut.G.x), this.yToY(data.gamut.G.y));
        this.context.lineTo(this.xToX(data.gamut.B.x), this.yToY(data.gamut.B.y));
        this.context.closePath();
        this.context.stroke();
    }

    drawReference() {
        this.context.strokeStyle = '#CACACA';
        this.context.beginPath();
        for (let i = 1; i < this.divisionNumber - this.axesFreeSpace + 1; i++) {
            this.context.moveTo(this.axesFreeSpace * this.width / this.divisionNumber, (this.divisionNumber - this.axesFreeSpace - i) * this.height / this.divisionNumber);
            this.context.lineTo(this.width, (this.divisionNumber - this.axesFreeSpace - i) * this.height / this.divisionNumber);
            this.context.moveTo((this.axesFreeSpace + i) * this.width / this.divisionNumber, 0);
            this.context.lineTo((this.axesFreeSpace + i) * this.width / this.divisionNumber, (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber);
        }
        this.context.moveTo(this.axesFreeSpace * this.width / this.divisionNumber, 0);
        this.context.lineTo(this.width, (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber);
        this.context.stroke();

        let str = ''
        let measure;
        let height = 0;
        let width = 0;
        this.context.font = '1rem Arial';
        this.context.strokeStyle = 'white';
        this.context.beginPath();
        this.context.moveTo(this.axesFreeSpace * this.width / this.divisionNumber, (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber);
        this.context.lineTo(this.width, (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber);
        this.context.moveTo(this.axesFreeSpace * this.width / this.divisionNumber, 0);
        this.context.lineTo(this.axesFreeSpace * this.width / this.divisionNumber, (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber);
        for (let i = 0; i < (this.divisionNumber - this.axesFreeSpace) / this.graduationFrequence + this.showLastGrad; i++) {
            str = Math.round(i / ((this.divisionNumber - this.axesFreeSpace) / this.graduationFrequence) * 100) / 100;
            measure = this.context.measureText(str);
            height = Math.abs(measure.actualBoundingBoxAscent - measure.actualBoundingBoxDescent);
            width = Math.abs(measure.actualBoundingBoxLeft - measure.actualBoundingBoxRight);
            this.context.moveTo(this.axesFreeSpace * this.width / this.divisionNumber, (this.divisionNumber - this.axesFreeSpace - this.graduationFrequence * i) * this.height / this.divisionNumber);
            this.context.lineTo(this.axesFreeSpace * this.width / this.divisionNumber - this.graduationSize, (this.divisionNumber - this.axesFreeSpace - this.graduationFrequence * i) * this.height / this.divisionNumber);
            this.context.fillText(str, this.axesFreeSpace * this.width / this.divisionNumber - this.graduationSize * 2 - width, (this.divisionNumber - this.axesFreeSpace - this.graduationFrequence * i) * this.height / this.divisionNumber + height / 2);
            this.context.moveTo((this.axesFreeSpace + this.graduationFrequence * i) * this.width / this.divisionNumber, (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber);
            this.context.lineTo((this.axesFreeSpace + this.graduationFrequence * i) * this.width / this.divisionNumber, (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber + this.graduationSize);
            this.context.fillText(str, (this.axesFreeSpace + this.graduationFrequence * i) * this.width / this.divisionNumber - width / 2, (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber + this.graduationSize * 2 + height);
        this.context.fillStyle= 'white';
        }
        this.context.stroke();

        
    }

    drawWhite() {
        const X = this.xToX(data.gamut.white.x);
        const Y = this.yToY(data.gamut.white.y);
        const measure = this.context.measureText(data.gamut.white.type);
        const height = Math.abs(measure.actualBoundingBoxAscent - measure.actualBoundingBoxDescent);
        this.context.strokeStyle = '#000000';
        this.context.beginPath();
        this.context.arc(X, Y, 3, 0, 2 * Math.PI)
        this.context.fillText(data.gamut.white.type, X, Y - height);
        this.context.stroke();
    }

    drawΛCurve() {
        this.context.strokeStyle = '#0000FF';
        this.context.stroke(this.λPath);
    }

    fillColor() {
        this.fillColorImageData = this.context.getImageData(this.λPathBounding.x, this.λPathBounding.y, this.λPathBounding.width, this.λPathBounding.height);
        const data32 = new Uint32Array(this.fillColorImageData.data.buffer);
        let x;
        let y;
        let rgb;
        for (let Y = this.λPathBounding.top; Y < this.λPathBounding.bottom; ++Y) {
            y = this.YToy(Y);
            for (let X = this.λPathBounding.left; X < this.λPathBounding.right; ++X) {
                if (this.context.isPointInPath(this.λPath, X, Y)) {
                    x = this.XTox(X);
                    rgb = this.xyYToRGB(x, y);
                    data32[(Y - this.λPathBounding.top) * this.λPathBounding.width + X - this.λPathBounding.left] = (255 << 24) | (rgb[2] << 16) | (rgb[1] << 8) | rgb[0];
                }
            }
        }
        this.context.putImageData(this.fillColorImageData, this.λPathBounding.x, this.λPathBounding.y);
    }

    redraw() {
        this.buildStyle();
        this.clear();
        this.drawReference();
        this.createΛPath();
        this.fillColor();
        this.drawΛCurve();
        this.drawGamut();
        this.drawWhite();
        this.movePointer();
    }

    // Color conversions:
    xyYToRGB(x, y) {
        return this.XYZToRGB(...this.xyYToXYZ(x, y));
    }

    XYZToRGB(X, Y, Z) {
        const m = [
            [X],
            [Y],
            [Z]
        ];
        return this.multiplyMatrix(data.Matrix, m)[0].map(x => Math.min(1, Math.max(0, this.companded ? x <= data.sRGBCompanding.limits.XYZToRGB ? data.sRGBCompanding.a * x : data.sRGBCompanding.b * Math.pow(x, 1 / data.sRGBCompanding.d) - data.sRGBCompanding.c : x)) * 255);
    }

    xyYToXYZ(x, y) {
        return [
            y ? this.Y * x / y : 0,
            y ? this.Y : 0,
            y ? this.Y * (1 - x - y) / y : 0
        ]
    }

    RGBToXyY(R, G, B) {
        return this.XYZToxyY(...this.RGBToXYZ(R, G, B));
    }

    RGBToXYZ(R, G, B) {
        let RGB = [R, G, B].map(x => x / 255);
        if (this.companded)
            RGB = RGB.map(x => x <= data.sRGBCompanding.limits.RGBToXYZ ? x / data.sRGBCompanding.a : Math.pow((x + data.sRGBCompanding.c) / data.sRGBCompanding.b, data.sRGBCompanding.d));
        return this.multiplyMatrix(data.invMatrix, [
            [RGB[0]],
            [RGB[1]],
            [RGB[2]]
        ])[0].map(x => Math.min(1, Math.max(0, x)));
    }

    XYZToxyY(X, Y, Z) {
        return [
            X + Y + Z ? X / (X + Y + Z) : data.gamut.white.x,
            X + Y + Z ? Y / (X + Y + Z) : data.gamut.white.y,
            Y
        ]
    }

    multiplyMatrix(m1, m2) {
        const conjugation = (arr1, arr2) => {
            let r = 0;
            for (let i = 0; i < Math.min(arr1.length, arr2.length); i++)
                r += arr1[i] * arr2[i];
            return r;
        };
        const m3 = [];
        for (let i = 0; i < m2[0].length; i++)
            m3.push(Array(m1.length));
        for (let i = 0; i < m2[0].length; i++) {
            const c = m2.map(x => x[i]);
            for (let j = 0; j < m1.length; j++) {
                const r = m1[j];
                m3[i][j] = conjugation(r, c);
            }
        }
        return m3;
    }

    // Inputs:
    fillInputs(changeSource) {
        let color = [];
        switch (changeSource) {
            case 'RGB':
                color = this.RGBToXyY(this.inputs.RGB.R.value, this.inputs.RGB.G.value, this.inputs.RGB.B.value);
                this.inputs.xy.x.safeValue = color[0];
                this.inputs.xy.y.safeValue = color[1];
                if (this.inputs.xy.x.safeValue !== color[0])
                    this.inputs.xy.x.safeValue = color[0]; // In case first safeValue failed
                this.Y = color[2];
                break;
            case 'xy':
                color = this.xyYToRGB(this.inputs.xy.x.value, this.inputs.xy.y.value);
                this.inputs.RGB.R.value = color[0];
                this.inputs.RGB.G.value = color[1];
                this.inputs.RGB.B.value = color[2];
                break;
            case 'pointer':
                color = this.xyYToRGB(this.inputs.xy.x.value, this.inputs.xy.y.value);
                this.inputs.RGB.R.value = color[0];
                this.inputs.RGB.G.value = color[1];
                this.inputs.RGB.B.value = color[2];
                break;
            case 'Y':
                color = this.xyYToRGB(this.inputs.xy.x.value, this.inputs.xy.y.value);
                this.inputs.RGB.R.value = color[0];
                this.inputs.RGB.G.value = color[1];
                this.inputs.RGB.B.value = color[2];
                break;
            case 'companded':
                color = this.xyYToRGB(this.inputs.xy.x.value, this.inputs.xy.y.value);
                this.inputs.RGB.R.value = color[0];
                this.inputs.RGB.G.value = color[1];
                this.inputs.RGB.B.value = color[2];
                break;
        }
        this.movePointer(this.inputs.xy.x.value, this.inputs.xy.y.value);
        this.colorDiv.style.backgroundColor = 'rgb(' + this.inputs.RGB.R.value + ', ' + this.inputs.RGB.G.value + ', ' + this.inputs.RGB.B.value + ')';
        this.colorDiv.setAttribute("id","carreCouleursMelange");
        this.colorDiv.style.height = "200px";
        this.colorDiv.style.width = "200px";
    }

    movePointer(x = null, y = null) {
        this.pointerSpan.style.left = this.xToX(x ? x : this.pointer[0]) + 'px';
        this.pointerSpan.style.top = this.yToY(y ? y : this.pointer[1]) + 'px';
    }

    // Events:
   

    // Coord conversions:
    xToX(x) {
        return (this.axesFreeSpace + x * (this.divisionNumber - this.axesFreeSpace)) * this.width / this.divisionNumber;
    }

    yToY(y) {
        return (1 - y) * (this.divisionNumber - this.axesFreeSpace) * this.height / this.divisionNumber;
    }

    XTox(X) {
        return (X * this.divisionNumber / this.width - this.axesFreeSpace) / (this.divisionNumber - this.axesFreeSpace)
    }

    YToy(Y) {
        return 1 - Y * this.divisionNumber / (this.height * (this.divisionNumber - this.axesFreeSpace));
    }

};

// Add to customElement library
customElements.define('cie-xy-chart', HTMLCIEXyChart);

function recupvaleurxBleu() {

    const cieChart = document.querySelector('cie-xy-chart'); // Tu récupère le premier diagramme de ton DOM (par exemple.)

    if (vm.selected === 390) {
        data.gamut.B.λ = vm.selected;
        data.gamut.B.x = vm.options[0].valuex;
        data.gamut.B.y = vm.options[0].valuey;
        data.XYZ.B.λ = vm.selected;
        data.XYZ.B.X = vm.options[0].valueX;
        data.XYZ.B.Y = vm.options[0].valueY;
        data.XYZ.B.Z = vm.options[0].valueZ;

    } else if (vm.selected === 403) {
        data.gamut.B.λ = vm.selected;
        data.gamut.B.x = vm.options[1].valuex;
        data.gamut.B.y = vm.options[1].valuey;
        data.XYZ.B.λ = vm.selected;
        data.XYZ.B.X = vm.options[1].valueX;
        data.XYZ.B.Y = vm.options[1].valueY;
        data.XYZ.B.Z = vm.options[1].valueZ;
    } else if (vm.selected === 410) {
        data.gamut.B.λ = vm.selected;
        data.gamut.B.x = vm.options[2].valuex;
        data.gamut.B.y = vm.options[2].valuey;
        data.XYZ.B.λ = vm.selected;
        data.XYZ.B.X = vm.options[2].valueX;
        data.XYZ.B.Y = vm.options[2].valueY;
        data.XYZ.B.Z = vm.options[2].valueZ;
    } else if (vm.selected === 440) {
        data.gamut.B.λ = vm.selected;
        data.gamut.B.x = vm.options[3].valuex;
        data.gamut.B.y = vm.options[3].valuey;
        data.XYZ.B.λ = vm.selected;
        data.XYZ.B.X = vm.options[3].valueX;
        data.XYZ.B.Y = vm.options[3].valueY;
        data.XYZ.B.Z = vm.options[3].valueZ;
    } else if (vm.selected === 490) {
        data.gamut.B.λ = vm.selected;
        data.gamut.B.x = vm.options[4].valuex;
        data.gamut.B.y = vm.options[4].valuey;
        data.XYZ.B.λ = vm.selected;
        data.XYZ.B.X = vm.options[4].valueX;
        data.XYZ.B.Y = vm.options[4].valueY;
        data.XYZ.B.Z = vm.options[4].valueZ;
    }
}

function recupvaleurxVert() {

    const cieChart = document.querySelector('cie-xy-chart'); // Tu récupère le premier diagramme de ton DOM (par exemple.)

    if (vm.selected2 === 502) {
        data.gamut.G.λ = vm.selected2;
        data.gamut.G.x = vm.options2[0].valuex;
        data.gamut.G.y = vm.options2[0].valuey;
        data.XYZ.G.X = vm.options2[0].valueX;
        data.XYZ.G.Y = vm.options2[0].valueY;
        data.XYZ.G.Z = vm.options2[0].valueZ;
    } else if (vm.selected2 === 512) {
        data.gamut.G.λ = vm.selected2;
        data.gamut.G.x = vm.options2[1].valuex;
        data.gamut.G.y = vm.options2[1].valuey;
        data.XYZ.G.λ = vm.selected2;
        data.XYZ.G.X = vm.options2[1].valueX;
        data.XYZ.G.Y = vm.options2[1].valueY;
        data.XYZ.G.Z = vm.options2[1].valueZ;
    } else if (vm.selected2 === 520) {
        data.gamut.G.λ = vm.selected2;
        data.gamut.G.x = vm.options2[2].valuex;
        data.gamut.G.y = vm.options2[2].valuey;
        data.XYZ.G.X = vm.options2[2].valueX;
        data.XYZ.G.Y = vm.options2[2].valueY;
        data.XYZ.G.Z = vm.options2[2].valueZ;
    } else if (vm.selected2 === 530) {
        data.gamut.G.λ = vm.selected2;
        data.gamut.G.x = vm.options2[3].valuex;
        data.gamut.G.y = vm.options2[3].valuey;
        data.XYZ.G.X = vm.options2[3].valueX;
        data.XYZ.G.Y = vm.options2[3].valueY;
        data.XYZ.G.Z = vm.options2[3].valueZ;
    }

}

function recupvaleurxRouge() {

    const cieChart = document.querySelector('cie-xy-chart'); // Tu récupère le premier diagramme de ton DOM (par exemple.)
    
    if (rouge === "id_nm_655") {
        data.gamut.R.x = vm.options3[4].valuex;
        data.gamut.R.y = vm.options3[4].valuey;
        data.XYZ.R.X = vm.options3[4].valueX;
        data.XYZ.R.Y = vm.options3[4].valueY;
        data.XYZ.R.Z = vm.options3[4].valueZ;
    } else if (rouge === "id_nm_630") {
        data.gamut.R.x = vm.options3[3].valuex;
        data.gamut.R.y = vm.options3[3].valuey;
        data.XYZ.R.X = vm.options3[3].valueX;
        data.XYZ.R.Y = vm.options3[3].valueY;
        data.XYZ.R.Z = vm.options3[3].valueZ;
    } else if (rouge === "id_nm_620") {
        data.gamut.R.x = vm.options3[2].valuex;
        data.gamut.R.y = vm.options3[2].valuey;
        data.XYZ.R.X = vm.options3[2].valueX;
        data.XYZ.R.Y = vm.options3[2].valueY;
        data.XYZ.R.Z = vm.options3[2].valueZ;
    } else if (rouge === "id_nm_605") {
        data.gamut.R.x = vm.options3[1].valuex;
        data.gamut.R.y = vm.options3[1].valuey;
        data.XYZ.R.X = vm.options3[1].valueX;
        data.XYZ.R.Y = vm.options3[1].valueY;
        data.XYZ.R.Z = vm.options3[1].valueZ;
    } else if (rouge === "id_nm_590") {
        data.gamut.R.x = vm.options3[0].valuex;
        data.gamut.R.y = vm.options3[0].valuey;
        data.XYZ.R.X = vm.options3[0].valueX;
        data.XYZ.R.Y = vm.options3[0].valueY;
        data.XYZ.R.Z = vm.options3[0].valueZ;
    }
}


// mettre les valeurs des curseurs en pourcentage
//recuper x,y,z
//faire le calcul puis le mettre dans les inputs x et y
function CalculMélangeRGB() {
    
        //valeurs des curseurs
        valCurseurR = document.querySelector("#curseurRouge").getElementsByTagName('input')[0].value;
        valCurseurG = document.querySelector("#curseurVert").getElementsByTagName('input')[0].value;
        valCurseurB = document.querySelector("#curseurBleu").getElementsByTagName('input')[0].value;
        //valeurs des curseurs en %
        pCurseurR = valCurseurR / 100;
        pCurseurB = valCurseurB / 100;
        pCurseurG = valCurseurG / 100;

        //recuperer les valeurs X Y Z
        XBleu = data.XYZ.B.X;
        YBleu = data.XYZ.B.Y;
        ZBleu = data.XYZ.B.Z;
        //XYZ du Vert
        XVert = data.XYZ.G.X;
        YVert = data.XYZ.G.Y;
        ZVert = data.XYZ.G.Z;
        //XYZ du rouge
        XRouge = data.XYZ.R.X;
        YRouge = data.XYZ.R.Y;
        ZRouge = data.XYZ.R.Z;

        //calcul du X,Y,Z pour le mélange

        Xmelange = (XBleu * pCurseurB) + (XVert * pCurseurG) + (XRouge * pCurseurR);
        Ymelange = (YBleu * pCurseurB) + (YVert * pCurseurG) + (YRouge * pCurseurR);
        Zmelange = (ZBleu * pCurseurB) + (ZVert * pCurseurG) + (ZRouge * pCurseurR);

        //calcul du melange du x et y
        xMelange = Xmelange / (Xmelange + Ymelange + Zmelange);
        yMelange = Ymelange / (Xmelange + Ymelange + Zmelange);

        const cieChart = document.querySelector('cie-xy-chart'); // Tu récupère le premier diagramme de ton DOM (par exemple.)
        cieChart.inputs.xy.x.value = xMelange; // Tu définis la valeur du champ x.
        cieChart.inputs.xy.x.dispatchEvent(new InputEvent('input')); // Tu déclenches l'événement "input" correspondant à x.
        cieChart.inputs.xy.y.value = yMelange; // Tu définis la valeur du champ y.
        cieChart.inputs.xy.y.dispatchEvent(new InputEvent('input')); // Tu déclenches l'événement "input" correspondant à y.
        // Déclencher les événements input devrait rafraîchir le diagramme.
    
}

function CalculMélangeCouleurBlanc() {

    //valeurs des curseurs
    valCurseurCouleur = document.querySelector("#curseurCouleur").getElementsByTagName('input')[0].value;
    valCurseurBlanc = document.querySelector("#curseurBlancJeux").getElementsByTagName('input')[0].value / 100;
    //valeurs des curseurs en %
    pCurseurCouleur = valCurseurCouleur / 100;
    pCurseurBlanc = valCurseurBlanc / 100;

    //recuperer les valeurs X Y Z
    XBleu = data.XYZ.Couleur.X;
    YBleu = data.XYZ.Couleur.Y;
    ZBleu = data.XYZ.Couleur.Z;
    //XYZ du Vert
    XVert = data.XYZ.Blanc.X;
    YVert = data.XYZ.Blanc.Y;
    ZVert = data.XYZ.Blanc.Z;


    //calcul du X,Y,Z pour le mélange

    Xmelange = (XBleu * pCurseurCouleur) + (XVert * valCurseurBlanc);
    Ymelange = (YBleu * pCurseurCouleur) + (YVert * valCurseurBlanc);
    Zmelange = (ZBleu * pCurseurCouleur) + (ZVert * valCurseurBlanc);

    //calcul du melange du x et y
    xMelange = Xmelange / (Xmelange + Ymelange + Zmelange);
    yMelange = Ymelange / (Xmelange + Ymelange + Zmelange);

    const cieChart = document.querySelector('cie-xy-chart'); // Tu récupère le premier diagramme de ton DOM (par exemple.)
    cieChart.inputs.xy.x.value = xMelange; // Tu définis la valeur du champ x.
    cieChart.inputs.xy.x.dispatchEvent(new InputEvent('input')); // Tu déclenches l'événement "input" correspondant à x.
    cieChart.inputs.xy.y.value = yMelange; // Tu définis la valeur du champ y.
    cieChart.inputs.xy.y.dispatchEvent(new InputEvent('input')); // Tu déclenches l'événement "input" correspondant à y.
    // Déclencher les événements input devrait rafraîchir le diagramme.


}

 //document.getElementById("valeurCurseur1").innerHTML = document.getElementsByTagName("input")[0].value + "%";
 //   document.getElementById("valeurCurseur2").innerHTML = document.getElementsByTagName("input")[1].value + "%";
   

////////// BG ///////////////
var nbrMaxCaissonDefault = 4;
var commandControlerDalle = {
    command: "C_CommanderSaturation",
    universe: 1,
    numeroCaisson: 1,
    dataSaturationCIE: [],
    nombreMaxCaisson: nbrMaxCaissonDefault,
    couleur: null,
    blanc: null
};
let tabCurseurCouleur = ["id_nm_390", "id_nm_403", "id_nm_405", "id_nm_410", "id_nm_425", "id_nm_440", "id_nm_450", "id_nm_470", "id_nm_480", "id_nm_490", "id_nm_502",
    "id_nm_512", "id_nm_520", "id_nm_530", "id_nm_544-lime", "id_nm_590", "id_nm_605", "id_nm_620", "id_nm_629-pc", "id_nm_630", "id_nm_655", "id_nm_660", "id_nm_680", "id_nm_730",
];
let tabCurseurBlanc = ["id_3000K-IRC=83", "id_3000K-IRC=83", "id_4000K-IRC=97", "id_5600K-IRC=83", "id_6500K-IRC=97", "id_4000K-IRC=82", "id_2700K-IRC=98"
    , "id_5000K-IRC=99"
];

let tabOrderColorDMX = [
    "id_nm_490",
    0,
    "id_nm_512",
    0,
    "id_nm_629-pc",
    0,
    "id_nm_502",
    0,
    "id_nm_530",
    0,
    "id_nm_520",
    0,
    "id_nm_544-lime",
    0,
    "id_nm_480",
    0,
    "id_3000K-IRC=83",
    0,
    "id_nm_450",
    0,
    "id_3000K-IRC=83",
    0,
    "id_4000K-IRC=97",
    0,
    "id_5600K-IRC=83",
    0,
    "id_nm_403",
    0,
    "id_nm_440",
    0,
    "id_nm_405",
    0,
    0,
    0,
    0,
    0,
    "id_6500K-IRC=97",
    0,
    "id_nm_425",
    0,
    "id_nm_410",
    0,
    "id_nm_470",
    0,
    "id_4000K-IRC=82",
    0,
    "id_nm_390",
    0,
    0,
    0,
    "id_2700K-IRC=98",
    0,
    "id_5000K-IRC=99",
    0,
    0,
    0,
    "id_nm_590",
    0,
    "id_nm_605",
    0,
    0,
    0,
    0,
    0,
    "id_nm_655",
    0,
    "id_nm_660",
    0,
    "id_nm_730",
    0,
    "id_nm_680",
    0,
    "id_nm_620",
    0,
    "id_nm_630"
]

///////////A revenir dessus, essayer de remplacer ajustcursor par  simplement get idcursueur//////////

//Appel une fonction dans un autre fichier (pageJeux.ejs) pour récupérer l'id du curseur "Couleur" qui est utilisé 
//et ajuste les curseau pour les mettre a 0
//Paramètre d'entrée  : Aucune
//Valeur retournée : Aucune
function ajustCursorColor() {
       
        console.log(idColor)
        for (let i = 0; i < tabCurseurCouleur.length; i++) {

            commandControlerDalle.dataSaturationCIE[tabOrderColorDMX.indexOf(tabCurseurCouleur[i])] = 0;
           
        }
        commandControlerDalle.dataSaturationCIE[76] = 0
        commandControlerDalle.dataSaturationCIE[78] = 0 //pas d'erreur
        commandControlerDalle.couleur = idColor;
}


//Appel une fonction dans un autre fichier (pageJeux.ejs) pour récupérer l'id du curseur Blanc qui est utilisé
//et ajuste les curseau pour les mettre a 0
//Paramètre d'entrée  : Aucune
//Valeur retournée : Aucune
function ajustCursorBlanc() {

         console.log(idBlanc)
        for (let i = 0; i < tabCurseurBlanc.length; i++) {
            commandControlerDalle.dataSaturationCIE[tabOrderColorDMX.indexOf(tabCurseurBlanc[i])] = 0;
  
        }
        commandControlerDalle.blanc = idBlanc;

}

//Remet a 0 tout les curseurs de la Couleur changée  puis associe la valeur du curseur auquel nous avons intéragit dans le 
//bon emplacmeent du tableau qui permet de controler la dalle  DMX et Envoit au serveur grâce a l'Appel de la fonction sendCommandControlerDalle();
//Paramètre d'entrée  : Aucun
//valeur retournée : Aucune 
function commanderBlanc() {
    console.log("send");
    CalculMélangeCouleurBlanc();
    for (let i = 0; i < tabCurseurBlanc.length;  i++) {

        commandControlerDalle.dataSaturationCIE[tabOrderColorDMX.indexOf(tabCurseurBlanc[i])] = 0;
        console.log("ok")
        if (tabCurseurBlanc[i] === idBlanc) {
            commandControlerDalle.dataSaturationCIE[tabOrderColorDMX.indexOf(idBlanc)] = parseInt(document.getElementById(idBlanc).value);
            document.getElementById("valeurCurseur2").innerHTML = document.getElementsByTagName("input")[2].value + "%";
            console.log("Blanc  :: " + parseInt(document.getElementById(idBlanc).value));

        }

    }

    try {
        commandControlerDalle.dataSaturationCIE[76] = parseInt(document.getElementById("id_nm_605").value);
        commandControlerDalle.dataSaturationCIE[78] = parseInt(document.getElementById("id_nm_605").value); //pas d'erreur
    }
    catch {

        commandControlerDalle.dataSaturationCIE[76] = 0
        commandControlerDalle.dataSaturationCIE[78] = 0 
    }
    sendCommandControlerDalle();
}


//Remet a 0 tout les curseurs de la Couleur changée  puis associe la valeur du curseur auquel nous avons intéragit dans le 
//bon emplacmeent du tableau qui permet de controler la dalle  DMX et Envoit au serveur grâce a l'Appel de la fonction sendCommandControlerDalle();
//Paramètre d'entrée  : Aucun
//valeur retournée : Aucune 
function commanderCouleur() {
    CalculMélangeCouleurBlanc();
    for (let i = 0; i < tabCurseurCouleur.length; i++) {

        commandControlerDalle.dataSaturationCIE[tabOrderColorDMX.indexOf(tabCurseurCouleur[i])] = 0;
        console.log("ok")
        if (tabCurseurCouleur[i] === idColor) {
            commandControlerDalle.dataSaturationCIE[tabOrderColorDMX.indexOf(idColor)] = parseInt(document.getElementById(idColor).value);
            document.getElementById("valeurCurseur1").innerHTML = document.getElementsByTagName("input")[1].value + "%";
            console.log("Couleur  :: " + parseInt(document.getElementById(idColor).value));

        }

    }

    try {
        commandControlerDalle.dataSaturationCIE[76] = parseInt(document.getElementById("id_nm_605").value);
        commandControlerDalle.dataSaturationCIE[78] = parseInt(document.getElementById("id_nm_605").value); //pas d'erreur
    }
    catch {

        commandControlerDalle.dataSaturationCIE[76] = 0
        commandControlerDalle.dataSaturationCIE[78] = 0 
    }
    sendCommandControlerDalle();
}


//permet d'envoyer les donnée des curseur au serveur
//Valeur d'entré : aucune
//Valeur de sortie : aucune 
var canSend = true; 
function sendCommandControlerDalle() {
    commandControlerDalle.command = "C_CommanderSaturation"

    commandControlerDalleMemory = commandControlerDalle; 
    if (canSend === true) {
        ws.send(JSON.stringify(commandControlerDalle)) //Envoit sous forme de string
        console.log("envoyer");
        canSend = false;
        setTimeout(() => {
            canSend = true;
            ws.send(JSON.stringify(commandControlerDalleMemory));  //Envoit sous forme de string
        }, 100); //timer pour empecher le spam de trame sur le serveur
    }

    console.log(commandControlerDalleMemory);

}

function changeCaisson() {
    setTimeout(() => {
        commandControlerDalle.numeroCaisson = CaissonVueModel.selected;
        commandControlerDalle.command = "C_DemanderCaissonSaturation";
        ws.send(JSON.stringify(commandControlerDalle));
    }, 500);
}

//////////////////////////  Comunication Serveur /////////////////////////////////
var ipServeur = location.hostname; // Adresse ip du serveur
var ws; // Variable pour l'instance de la WebSocket.

//executé au chargement de la page web
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
window.onload = function () {
    //ControleIHM();
    ConnexionAuServeurWebsocket();


};

// connexion au serveur web socket
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
function ConnexionAuServeurWebsocket() {
    ws = new WebSocket("ws://" + ipServeur + ":80/echo");
    ws.onclose = function (evt) {

        window.alert("Vous avez été deconnecté ...");
    };
    //Quand la websocket s'ouvre
    ws.onopen = function () {


        //Init creation boutton & recupération d'id
        selectionnerbutton("id_2700K-IRC=98");

        //Une demande est faite au serveur pour récupéré les dernière donnée recut par le serveur  
        CalculMélangeCouleurBlanc();
        setTimeout(() => {     
        commandControlerDalle.command = "C_DemanderCaissonSaturation";
            ws.send(JSON.stringify(commandControlerDalle));
        }, 30) 
       
        commandControlerDalle.command = "test";
        ws.send(JSON.stringify(commandControlerDalle));
        
    };

    //quand on recoit un message du serveur
    ws.onmessage = function (evt) {

        /*instructions*/

        //on essais de parse le message du serveur, si il y a une erreur, les lumières s'éteignent par default 
        //try {
        let messageFromServer = JSON.parse(evt.data);
        if (messageFromServer.command === "test");
            chargerLoader();

        if (messageFromServer.command === "C_replyCommandAjustCursorSaturation" || messageFromServer.command === "C_reply_DemanderCaissonSaturation") {
            if (messageFromServer.numeroCaisson === commandControlerDalle.numeroCaisson) {

                if (commandControlerDalle.couleur === idColor) {
                    document.getElementById(idColor).value = messageFromServer.dataSaturationCIE[tabOrderColorDMX.indexOf(idColor)];
                    document.getElementById("valeurCurseur1").innerHTML = document.getElementsByTagName("input")[1].value + "%";
                }

                if (commandControlerDalle.blanc === idBlanc) {
                    document.getElementById(idBlanc).value = messageFromServer.dataSaturationCIE[tabOrderColorDMX.indexOf(idBlanc)];
                    document.getElementById("valeurCurseur2").innerHTML = document.getElementsByTagName("input")[2].value + "%";
                }
                commandControlerDalle.dataSaturationCIE = messageFromServer.dataSaturationCIE;
                CalculMélangeCouleurBlanc();
            }
        }
    }
}

//interaction IHM
function ControleIHM() {

}