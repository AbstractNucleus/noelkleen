export default function Home() {
    return (
        <>
            <div id="glowscript" class="glowscript">
                <link type="text/css" href="https://www.glowscript.org/css/redmond/2.1/jquery-ui.custom.css" rel="stylesheet" />
                <link type="text/css" href="https://www.glowscript.org/css/ide.css" rel="stylesheet" />
                <script type="text/javascript" src="https://www.glowscript.org/lib/jquery/2.1/jquery.min.js"></script>
                <script type="text/javascript" src="https://www.glowscript.org/lib/jquery/2.1/jquery-ui.custom.min.js"></script>
                <script type="text/javascript" src="https://www.glowscript.org/package/glow.3.2.min.js"></script>
                <script type="text/javascript" src="https://www.glowscript.org/package/RSrun.3.2.min.js"></script>


                {function() {;
                var ρσ_modules = {};
                ρσ_modules.pythonize = {};
                ρσ_modules.random = {};

                (function(){
                    function strings() {
                        var string_funcs, exclude, name;
                        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
                        if (!arguments.length) {
                            exclude = (function(){
                                var s = ρσ_set();
                                s.jsset.add("split");
                                s.jsset.add("replace");
                                return s;
                            })();
                        } else if (arguments[0]) {
                            exclude = Array.prototype.slice.call(arguments);
                        } else {
                            exclude = null;
                        }
                        if (exclude) {
                            string_funcs = string_funcs.difference(set(exclude));
                        }
                        var ρσ_Iter0 = string_funcs;
                        ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
                        for (var ρσ_Index0 of ρσ_Iter0) {
                            name = ρσ_Index0;
                            (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
                        }
                    };
                    if (!strings.__module__) Object.defineProperties(strings, {
                        __module__ : {value: "pythonize"}
                    });

                    ρσ_modules.pythonize.strings = strings;
                })();

                (function(){
                    var ρσ_seed_state, ρσ_get_random_byte;
                    ρσ_seed_state = (function(){
                        var ρσ_d = {};
                        ρσ_d["key"] = ρσ_list_decorate([]);
                        ρσ_d["key_i"] = 0;
                        ρσ_d["key_j"] = 0;
                        return ρσ_d;
                    }).call(this);
                    ρσ_get_random_byte = (function() {
                        var ρσ_anonfunc = function () {
                            var ρσ_unpack;
                            ρσ_seed_state.key_i = (ρσ_seed_state.key_i + 1) % 256;
                            ρσ_seed_state.key_j = (ρσ_seed_state.key_j + (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_i, ρσ_expr_temp)]) % 256;
                            ρσ_unpack = [(ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_j, ρσ_expr_temp)], 
                            (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_i, ρσ_expr_temp)]];
                            (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_i, ρσ_expr_temp)] = ρσ_unpack[0];
                            (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_j, ρσ_expr_temp)] = ρσ_unpack[1];
                            return (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(((ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_i, ρσ_expr_temp)] + (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_j, ρσ_expr_temp)]) % 256, ρσ_expr_temp)];
                        };
                        if (!ρσ_anonfunc.__module__) Object.defineProperties(ρσ_anonfunc, {
                            __module__ : {value: "random"}
                        });
                        return ρσ_anonfunc;
                    })();
                    function seed() {
                        var x = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? seed.__defaults__.x : arguments[0];
                        var ρσ_kwargs_obj = arguments[arguments.length-1];
                        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
                        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "x")){
                            x = ρσ_kwargs_obj.x;
                        }
                        var i, j, ρσ_unpack;
                        ρσ_seed_state.key_i = ρσ_seed_state.key_j = 0;
                        if (typeof x === "number") {
                            x = x.toString();
                        } else if (typeof x !== "string") {
                            throw new TypeError("unhashable type: '" + typeof x + "'");
                        }
                        for (var ρσ_Index1 = 0; ρσ_Index1 < 256; ρσ_Index1++) {
                            i = ρσ_Index1;
                            (ρσ_expr_temp = ρσ_seed_state.key)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = i;
                        }
                        j = 0;
                        for (var ρσ_Index2 = 0; ρσ_Index2 < 256; ρσ_Index2++) {
                            i = ρσ_Index2;
                            j = (j + (ρσ_expr_temp = ρσ_seed_state.key)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] + x.charCodeAt(i % x.length)) % 256;
                            ρσ_unpack = [(ρσ_expr_temp = ρσ_seed_state.key)[(typeof j === "number" && j < 0) ? ρσ_expr_temp.length + j : j], 
                            (ρσ_expr_temp = ρσ_seed_state.key)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i]];
                            (ρσ_expr_temp = ρσ_seed_state.key)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = ρσ_unpack[0];
                            (ρσ_expr_temp = ρσ_seed_state.key)[(typeof j === "number" && j < 0) ? ρσ_expr_temp.length + j : j] = ρσ_unpack[1];
                        }
                    };
                    if (!seed.__defaults__) Object.defineProperties(seed, {
                        __defaults__ : {value: {x:(new Date).getTime()}},
                        __handles_kwarg_interpolation__ : {value: true},
                        __argnames__ : {value: ["x"]},
                        __module__ : {value: "random"}
                    });

                    seed();
                    function random() {
                        var n, m, i;
                        n = 0;
                        m = 1;
                        for (var ρσ_Index3 = 0; ρσ_Index3 < 8; ρσ_Index3++) {
                            i = ρσ_Index3;
                            n += ρσ_get_random_byte() * m;
                            m *= 256;
                        }
                        return n / 0x10000000000000000;
                    };
                    if (!random.__module__) Object.defineProperties(random, {
                        __module__ : {value: "random"}
                    });

                    function randrange() {
                        return choice(range.apply(this, arguments));
                    };
                    if (!randrange.__module__) Object.defineProperties(randrange, {
                        __module__ : {value: "random"}
                    });

                    function randint(a, b) {
                        return int(random() * (b - a + 1) + a);
                    };
                    if (!randint.__argnames__) Object.defineProperties(randint, {
                        __argnames__ : {value: ["a", "b"]},
                        __module__ : {value: "random"}
                    });

                    function uniform(a, b) {
                        return random() * (b - a) + a;
                    };
                    if (!uniform.__argnames__) Object.defineProperties(uniform, {
                        __argnames__ : {value: ["a", "b"]},
                        __module__ : {value: "random"}
                    });

                    function choice(seq) {
                        if (seq.length > 0) {
                            return seq[ρσ_bound_index(Math.floor(random() * seq.length), seq)];
                        } else {
                            throw new IndexError;
                        }
                    };
                    if (!choice.__argnames__) Object.defineProperties(choice, {
                        __argnames__ : {value: ["seq"]},
                        __module__ : {value: "random"}
                    });

                    function shuffle() {
                        var x = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
                        var random_f = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? shuffle.__defaults__.random_f : arguments[1];
                        var ρσ_kwargs_obj = arguments[arguments.length-1];
                        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
                        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "random_f")){
                            random_f = ρσ_kwargs_obj.random_f;
                        }
                        var j, ρσ_unpack, i;
                        for (var ρσ_Index4 = 0; ρσ_Index4 < x.length; ρσ_Index4++) {
                            i = ρσ_Index4;
                            j = Math.floor(random_f() * (i + 1));
                            ρσ_unpack = [x[(typeof j === "number" && j < 0) ? x.length + j : j], x[(typeof i === "number" && i < 0) ? x.length + i : i]];
                            x[(typeof i === "number" && i < 0) ? x.length + i : i] = ρσ_unpack[0];
                            x[(typeof j === "number" && j < 0) ? x.length + j : j] = ρσ_unpack[1];
                        }
                        return x;
                    };
                    if (!shuffle.__defaults__) Object.defineProperties(shuffle, {
                        __defaults__ : {value: {random_f:random}},
                        __handles_kwarg_interpolation__ : {value: true},
                        __argnames__ : {value: ["x", "random_f"]},
                        __module__ : {value: "random"}
                    });

                    function sample(population, k) {
                        var x, j, ρσ_unpack, i;
                        x = population.slice();
                        for (var ρσ_Index5 = population.length - 1; ρσ_Index5 > population.length - k - 1; ρσ_Index5-=1) {
                            i = ρσ_Index5;
                            j = Math.floor(random() * (i + 1));
                            ρσ_unpack = [x[(typeof j === "number" && j < 0) ? x.length + j : j], x[(typeof i === "number" && i < 0) ? x.length + i : i]];
                            x[(typeof i === "number" && i < 0) ? x.length + i : i] = ρσ_unpack[0];
                            x[(typeof j === "number" && j < 0) ? x.length + j : j] = ρσ_unpack[1];
                        }
                        return x.slice(population.length - k);
                    };
                    if (!sample.__argnames__) Object.defineProperties(sample, {
                        __argnames__ : {value: ["population", "k"]},
                        __module__ : {value: "random"}
                    });

                    ρσ_modules.random.ρσ_seed_state = ρσ_seed_state;
                    ρσ_modules.random.ρσ_get_random_byte = ρσ_get_random_byte;
                    ρσ_modules.random.seed = seed;
                    ρσ_modules.random.random = random;
                    ρσ_modules.random.randrange = randrange;
                    ρσ_modules.random.randint = randint;
                    ρσ_modules.random.uniform = uniform;
                    ρσ_modules.random.choice = choice;
                    ρσ_modules.random.shuffle = shuffle;
                    ρσ_modules.random.sample = sample;
                })();
                async function __main__() {
                "use strict";
                    var display = canvas;
                    var scene = canvas();

                    var version, print, arange, __name__, type, ρσ_ls, score_blue, score_red, speed, start, rundor, mål, continue_loop, troll, red, blue, wall_1, wall_2, wall_3, wall_4, ball, a, b, k, gravitation, poäng_blå, poäng_röd, final_score, röd_vann, blå_vann, i;
                    version = ρσ_list_decorate([ "3.2", "glowscript" ]);
                    Array.prototype['+'] = function(r) {return this.concat(r)}
                    Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
                    window.__GSlang = "vpython";
                    print = GSprint;
                    arange = range;
                    __name__ = "__main__";
                    type = pytype;
                    var strings = ρσ_modules.pythonize.strings;

                    strings();
                    var random = ρσ_modules.random;

                    "5";
                    async function detect_col(obj1, obj2) {
                        var ρσ_ls, xSize, ySize, zSize, currDist;
                        "6";
                        if (ρσ_instanceof(obj1, box) && ρσ_instanceof(obj2, box)) {
                            "7";
                            xSize = obj1.length["+"](obj2.length)["/"](2);
                            "8";
                            ySize = obj1.height["+"](obj2.height)["/"](2);
                            "9";
                            zSize = obj1.width["+"](obj2.width)["/"](2);
                            "10";
                            currDist = obj1.pos["-"](obj2.pos);
                            "11";
                            if (abs(currDist.x)["<"](xSize) && abs(currDist.y)["<"](ySize) && abs(currDist.z)["<"](zSize)) {
                                "12";
                                return true;
                                "13";
                            } else {
                                "14";
                                return false;
                                "15";
                            }
                        } else {
                            "16";
                            return false;
                        }
                    };
                    if (!detect_col.__argnames__) Object.defineProperties(detect_col, {
                        __argnames__ : {value: ["obj1", "obj2"]},
                        __module__ : {value: null}
                    });

                    "19";
                    scene.width = 700;
                    "20";
                    scene.height = 500;
                    "21";
                    scene.title = "Mangospel";
                    "22";
                    scene.range = 240;
                    "23";
                    scene.background = vec(.1, .1, .1);
                    "26";
                    score_blue = 0;
                    "27";
                    score_red = 0;
                    "28";
                    speed = 3;
                    "29";
                    start = 0;
                    "30";
                    rundor = 1;
                    "31";
                    mål = 3;
                    "32";
                    continue_loop = true;
                    "33";
                    troll = 0;
                    "36";
                    red = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vec(350, 0, 0), size: vec(10, 500, 0), color: vec(0, 0, 0), opacity: 1})]);
                    "37";
                    blue = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vec(350["-u"](), 0, 0), size: vec(10, 500, 0), color: vec(0, 0, 0), opacity: 1})]);
                    "38";
                    wall_1 = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vec(320, 0, 0), size: vec(5, 50, 0), color: vec(0, 0, 5), opacity: 1})]);
                    "39";
                    wall_2 = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vec(320["-u"](), 0, 0), size: vec(5, 50, 0), color: vec(5, 0, 0), opacity: 1})]);
                    "40";
                    wall_3 = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vec(0, 250, 0), size: vec(700, 5, 0), color: vec(0, 0, 0), opacity: 1})]);
                    "41";
                    wall_4 = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vec(0, 250["-u"](), 0), size: vec(700, 5, 0), color: vec(0, 0, 0), opacity: 1})]);
                    "44";
                    ball = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), radius: 13, color: vec(2, 1, 0)})]);
                    "45";
                    ball.visible = false;
                    "46";
                    ball.bb = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: ball.pos, size: vec(26, 28, 26), color: vec(1, 1, 1), opacity: 0})]);
                    "47";
                    ball.bb.visible = false;
                    "48";
                    while ((start === 0 || typeof start === "object" && ρσ_equals(start, 0))) {
                        "49";
                        start = random.randint(2, 2["-u"]());
                    }
                    "50";
                    start = 1;
                    "51";
                    a = start;
                    "52";
                    b = .1;
                    "53";
                    ball.pos = vec(start, 0, 0);
                    "54";
                    ball.bb.pos = ball.pos;
                    "57";
                    for (var ρσ_Index6 = 0; ρσ_Index6["<"](rundor); ρσ_Index6++) {
                        i = ρσ_Index6;
                        "58";
                        ball = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), radius: 13, color: vec(2, 1, 0)})]);
                        "59";
                        ball.bb = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), size: vec(26, 28, 26), color: vec(0, 0, 0), opacity: 0})]);
                        "60";
                        ball.bb.visible = false;
                        "61";
                        start = start["*"](1["-u"]());
                        "62";
                        ball.pos = vec(start, 0, 0);
                        "63";
                        while (continue_loop) {
                            "64";
                            troll=troll["+"](.01);
                            "65";
                            (await rate(60));
                            "66";
                            k = (await keysdown());
                            "67";
                            gravitation = vec(0, .2["-u"](), 0);
                            "68";
                            if (ρσ_in("w", k)) {
                                "69";
                                wall_2.pos.y=wall_2.pos.y["+"](speed);
                                "70";
                            }
                            if (ρσ_in("s", k)) {
                                "71";
                                wall_2.pos.y=wall_2.pos.y["-"](speed);
                                "72";
                            }
                            if (ρσ_in("up", k)) {
                                "73";
                                wall_1.pos.y=wall_1.pos.y["+"](speed);
                                "74";
                            }
                            if (ρσ_in("down", k)) {
                                "75";
                                wall_1.pos.y=wall_1.pos.y["-"](speed);
                            }
                            "76";
                            try {
                                "77";
                                if ((await detect_col(ball.bb, wall_1))) {
                                    "78";
                                    a = 1["-u"]();
                                    "79";
                                    b = random.randint(2["-u"](), 2);
                                    "80";
                                }
                                if ((await detect_col(ball.bb, wall_2))) {
                                    "81";
                                    a = 1;
                                    "82";
                                    b = random.randint(2["-u"](), 2);
                                    "83";
                                }
                                if (ball.bb.pos.y[">="](wall_3.pos.y["-"](30))) {
                                    "84";
                                    b = b["*"](1["-u"]());
                                    "85";
                                    ball.pos.y=ball.pos.y["-"](.3);
                                    "86";
                                }
                                if (ball.bb.pos.y["<="](wall_4.pos.y["+"](30))) {
                                    "87";
                                    b = b["*"](1["-u"]());
                                    "88";
                                    ball.pos.y=ball.pos.y["+"](.3);
                                    "89";
                                }
                                if (wall_1.pos.y[">="](wall_3.pos.y["+"](50))) {
                                    "90";
                                    wall_1.pos.y = 0;
                                    "91";
                                }
                                if (wall_2.pos.y[">="](wall_3.pos.y["+"](50))) {
                                    "92";
                                    wall_2.pos.y = 0;
                                    "93";
                                }
                                if (wall_1.pos.y["<="](wall_4.pos.y["-"](50))) {
                                    "94";
                                    wall_1.pos.y = 0;
                                    "95";
                                }
                                if (wall_2.pos.y["<="](wall_4.pos.y["-"](50))) {
                                    "96";
                                    wall_2.pos.y = 0;
                                    "97";
                                }
                                if ((await detect_col(ball.bb, red))) {
                                    "98";
                                    score_blue=score_blue["+"](1);
                                    "99";
                                    ball.visible = false;
                                    "100";
                                    delete ball.bb;
                                    "101";
                                    ball = undefined;
                                    "102";
                                    poäng_blå = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: vec(290["-u"](), 220, 0), text: "Röd har:"["+"](score_blue), height: 20, box: false, color: vec(5, 0, 0), font: "sans"})]);
                                    "103";
                                    wall_1.pos.y = 0;
                                    "104";
                                    wall_2.pos.y = 0;
                                    "105";
                                    b = 1["-u"]();
                                    "106";
                                }
                                if ((await detect_col(ball.bb, blue))) {
                                    "107";
                                    score_red=score_red["+"](1);
                                    "108";
                                    ball.visible = false;
                                    "109";
                                    delete ball.bb;
                                    "110";
                                    ball = undefined;
                                    "111";
                                    poäng_röd = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: vec(290, 220, 0), text: "Blå har:"["+"](score_red), height: 20, box: false, color: vec(0, 0, 5), font: "sans"})]);
                                    "112";
                                    wall_1.pos.x = 320;
                                    "113";
                                    wall_2.pos.x = 320["-u"]();
                                    "114";
                                    b = 1;
                                    "115";
                                }
                                if ((score_red === 3 || typeof score_red === "object" && ρσ_equals(score_red, 3))) {
                                    "116";
                                    ball.visible = false;
                                    "117";
                                    ball = undefined;
                                    "118";
                                    final_score = score_red["-"](score_blue);
                                    "119";
                                    röd_vann = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: vec(0, 20["-u"](), 0), text: "Blå vann med:"["+"](" ")["+"](final_score)["+"](" ")["+"]("poäng"), height: 60, box: false, color: vec(0, 0, 5), font: "sans"})]);
                                    "120";
                                    continue_loop = false;
                                    "121";
                                }
                                if ((score_blue === 3 || typeof score_blue === "object" && ρσ_equals(score_blue, 3))) {
                                    "122";
                                    ball.visible = false;
                                    "123";
                                    ball = undefined;
                                    "124";
                                    final_score = score_blue["-"](score_red);
                                    "125";
                                    blå_vann = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({pos: vec(0, 20["-u"](), 0), text: "Röd vann med:"["+"](" ")["+"](final_score)["+"](" ")["+"]("poäng"), height: 60, box: false, color: vec(5, 0, 0), font: "sans"})]);
                                    "126";
                                    continue_loop = false;
                                }
                                "127";
                                ball.pos.x=ball.pos.x["+"](troll["*"](a));
                                "128";
                                ball.pos.y=ball.pos.y["+"](b);
                                "129";
                                ball.bb.pos = ball.pos;
                                "130";
                                speed = abs(1["*"](a)["+"](1)["+"](troll["*"](a)));
                                "131";
                            } catch (ρσ_Exception) {
                                ρσ_last_exception = ρσ_Exception;
                                {
                                    "132";
                                    rundor=rundor["+"](1);
                                    "133";
                                    troll = 0;
                                    "134";
                                    wall_1.pos.y = 0;
                                    "135";
                                    wall_2.pos.y = 0;
                                    "136";
                                    break;
                                } 
                            }
                        }
                    }
                };
                if (!__main__.__module__) Object.defineProperties(__main__, {
                    __module__ : {value: null}
                });

                ;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })}}()

            </div>
        </>
    )
}
