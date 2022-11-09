(function (compId) {
    var _ = null,
        y = true,
        n = false,
        x1 = '6.0.0',
        rz = 'rotateZ',
        x9 = 'rgba(255,255,255,0.00)',
        x2 = '5.0.0',
        o = 'opacity',
        e10 = '${Stage}',
        g = 'image',
        e12 = '${TAB-ANIM-2}',
        e13 = '${TAB-ANIM-4}',
        lf = 'left',
        e11 = '${TAB-ANIM-1}',
        x3 = '6.0.0.400',
        x4 = 'rgba(0,0,0,0)',
        bg = 'background-color',
        i = 'none';
    var g6 = 'TAB-ANIM-2.svg',
        g7 = 'TAB-ANIM-1.svg',
        g8 = 'TAB-ANIM-4.svg',
        g5 = 'TAB-ANIM-3.2.svg';
    var im = 'assets/images/spin/',
        aud = 'media/',
        vid = 'media/',
        js = 'js/',
        fonts = {},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [],
        scripts = [],
        symbols = {
            "stage": {
                v: x1,
                mv: x2,
                b: x3,
                stf: i,
                cg: i,
                rI: n,
                cn: {
                    dom: [{
                        id: 'TAB-ANIM-3',
                        t: g,
                        r: ['253px', '5px', '412px', '200px', 'auto', 'auto'],
                        f: [x4, im + g5, '0px', '0px']
                    }, {
                        id: 'TAB-ANIM-2',
                        t: g,
                        r: ['11px', '0', '210px', '210px', 'auto', 'auto'],
                        o: '0',
                        f: [x4, im + g6, '0px', '0px'],
                        tf: [[], ['-360']]
                    }, {
                        id: 'TAB-ANIM-1',
                        t: g,
                        r: ['20px', '165px', '37px', '36px', 'auto', 'auto'],
                        o: '0',
                        f: [x4, im + g7, '0px', '0px']
                    }, {
                        id: 'TAB-ANIM-4',
                        t: g,
                        r: ['0', '0', '681px', '210px', 'auto', 'auto'],
                        o: '1',
                        f: [x4, im + g8, '0px', '0px']
                    }],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            r: ['null', 'null', '680px', '210px', 'auto', 'auto'],
                            overflow: 'hidden',
                            f: [x9]
                        }
                    }
                },
                tt: {
                    d: 3700,
                    a: y,
                    l: {
                        "loop": 0
                    },
                    data: [["eid26", bg, 0, 0, "linear", e10, 'rgba(255,255,255,0.00)', 'rgba(255,255,255,0.00)'], ["eid35", o, 690, 10, "easeInOutSine", e11, '0', '1'], ["eid38", lf, 1600, 0, "easeInOutSine", e11, '20px', '20px'], ["eid2", rz, 700, 3000, "easeInOutSine", e12, '0deg', '360deg'], ["eid30", o, 690, 10, "easeInOutSine", e13, '1', '0'], ["eid37", o, 690, 10, "easeInOutSine", e12, '0', '1']]
                }
            }
        };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-2684740");
(function ($, Edge, compId) {
    var Composition = Edge.Composition,
        Symbol = Edge.Symbol;
    Edge.registerEventBinding(compId, function ($) {
        //Edge symbol: 'stage'
        (function (symbolName) {
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3700, function (sym, e) {
                sym.play("loop");
            });
            //Edge binding end
        })("stage");
        //Edge symbol end:'stage'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-2684740");