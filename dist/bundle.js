(() => {
    var e = {
            325: () => {
                window.application = {
                    blocks: {},
                    screens: {},
                    renderScreen: function (e) {
                        window.application.screens[`${e}`]();
                    },
                    renderBlock: function (e, s) {
                        window.application.blocks[`${e}`](s);
                    },
                    timers: [],
                };
            },
        },
        s = {};
    function c(d) {
        var a = s[d];
        if (void 0 !== a) return a.exports;
        var n = (s[d] = { exports: {} });
        return e[d](n, n.exports, c), n.exports;
    }
    (() => {
        'use strict';
        c(325);
        const e = {
                card1: {
                    name: '6_clubs',
                    src: 'diststaticcards/cards/6_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card2: {
                    name: '7_clubs',
                    src: 'diststaticcards/cards/7_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card3: {
                    name: '8_clubs',
                    src: 'diststaticcards/cards/8_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card4: {
                    name: '9_clubs',
                    src: 'diststaticcards/cards/9_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card5: {
                    name: '10_clubs',
                    src: 'diststaticcards/cards/10_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card6: {
                    name: 'J_clubs',
                    src: 'diststaticcards/cards/J_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card7: {
                    name: 'Q_clubs',
                    src: 'diststaticcards/cards/Q_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card8: {
                    name: 'K_clubs',
                    src: 'diststaticcards/cards/K_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card9: {
                    name: 'A_clubs',
                    src: 'diststaticcards/cards/A_clubs.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card10: {
                    name: '6_diamonds',
                    src: 'diststaticcards/cards/6_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card11: {
                    name: '7_diamonds',
                    src: 'diststaticcards/cards/7_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card12: {
                    name: '8_diamonds',
                    src: 'diststaticcards/cards/8_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card13: {
                    name: '9_diamonds',
                    src: 'diststaticcards/cards/9_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card14: {
                    name: '10_diamonds',
                    src: 'diststaticcards/cards/10_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card15: {
                    name: 'J_diamonds',
                    src: 'diststaticcards/cards/J_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card16: {
                    name: 'Q_diamonds',
                    src: 'diststaticcards/cards/Q_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card17: {
                    name: 'K_diamonds',
                    src: 'diststaticcards/cards/K_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card18: {
                    name: 'A_diamonds',
                    src: 'diststaticcards/cards/A_diamonds.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card19: {
                    name: '6_hearts',
                    src: 'diststaticcards/cards/6_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card20: {
                    name: '7_hearts',
                    src: 'diststaticcards/cards/7_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card21: {
                    name: '8_hearts',
                    src: 'diststaticcards/cards/8_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card22: {
                    name: '9_hearts',
                    src: 'diststaticcards/cards/9_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card23: {
                    name: '10_hearts',
                    src: 'diststaticcards/cards/10_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card24: {
                    name: 'J_hearts',
                    src: 'diststaticcards/cards/J_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card25: {
                    name: 'Q_hearts',
                    src: 'diststaticcards/cards/Q_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card26: {
                    name: 'K_hearts',
                    src: 'diststaticcards/cards/K_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card27: {
                    name: 'A_hearts',
                    src: 'diststaticcards/cards/A_hearts.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card28: {
                    name: '6_spades',
                    src: 'diststaticcards/cards/6_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card29: {
                    name: '7_spades',
                    src: 'diststaticcards/cards/7_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card30: {
                    name: '8_spades',
                    src: 'diststaticcards/cards/8_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card31: {
                    name: '9_spades',
                    src: 'diststaticcards/cards/9_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card32: {
                    name: '10_spades',
                    src: 'diststaticcards/cards/10_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card33: {
                    name: 'J_spades',
                    src: 'diststaticcards/cards/J_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card34: {
                    name: 'Q_spades',
                    src: 'diststaticcards/cards/Q_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card35: {
                    name: 'K_spades',
                    src: 'diststaticcards/cards/K_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
                card36: {
                    name: 'A_spades',
                    src: 'diststaticcards/cards/A_spades.png',
                    card_upside: 'diststaticcards/Upside.png',
                },
            },
            s = document.querySelector('.app');
        function d() {
            s.innerHTML = '';
            const e = document.createElement('div');
            e.classList.add('game_screen', 'center'),
                s.appendChild(e),
                (window.application.blocks.game = n),
                window.application.renderBlock('game', e),
                (window.application.blocks.cardField = i),
                window.application.renderBlock('cardField', e);
        }
        function a(e) {
            let s = [];
            const c = document.createElement('div');
            c.classList.add('choose_level-div'), s.push(c);
            const a = document.createElement('p');
            a.classList.add('choose_level-title'),
                c.appendChild(a),
                (a.textContent = 'Выбери сложность');
            const n = document.createElement('div');
            n.classList.add('choose_level_form'), c.appendChild(n);
            const i = document.createElement('button');
            i.classList.add('choose_level-button_easy', 'level-button'),
                n.appendChild(i),
                (i.textContent = '1');
            const r = document.createElement('button');
            r.classList.add('choose_level-button_medium', 'level-button'),
                n.appendChild(r),
                (r.textContent = '2');
            const t = document.createElement('button');
            t.classList.add('choose_level-button_hard', 'level-button'),
                n.appendChild(t),
                (t.textContent = '3');
            const p = document.createElement('button');
            p.classList.add('choose_level-button'),
                c.appendChild(p),
                (p.textContent = 'Старт'),
                s.forEach((s) => {
                    e.appendChild(s);
                }),
                i.addEventListener('click', (e) => {
                    (window.application.level = 'easy'),
                        i.classList.add('level-button_click'),
                        r.classList.remove('level-button_click'),
                        t.classList.remove('level-button_click');
                }),
                r.addEventListener('click', (e) => {
                    (window.application.level = 'medium'),
                        r.classList.add('level-button_click'),
                        i.classList.remove('level-button_click'),
                        t.classList.remove('level-button_click');
                }),
                t.addEventListener('click', (e) => {
                    (window.application.level = 'hard'),
                        t.classList.add('level-button_click'),
                        i.classList.remove('level-button_click'),
                        r.classList.remove('level-button_click');
                }),
                p.addEventListener('click', (e) => {
                    e.preventDefault(),
                        (window.application.screens.game = d),
                        window.application.renderScreen('game');
                });
        }
        function n(e) {
            const s = document.createElement('div');
            s.classList.add('game_menu');
            const c = document.createElement('div');
            c.classList.add('game_timer_menu');
            const d = document.createElement('p');
            d.classList.add('game_time'),
                (d.textContent = 'min'),
                c.appendChild(d);
            const a = document.createElement('p');
            a.classList.add('game_time'),
                (a.textContent = 'sek'),
                c.appendChild(a);
            const n = document.createElement('p');
            n.classList.add('game_timer'),
                (n.textContent = '00.00'),
                s.appendChild(n);
            const i = document.createElement('button');
            i.classList.add('game_button'),
                (i.textContent = 'Начать заново'),
                s.appendChild(i),
                e.appendChild(c),
                e.appendChild(s);
        }
        function i(s) {
            const c = document.createElement('div');
            c.classList.add('card_field');
            const d = [];
            if ('easy' == window.application.level)
                for (let s = 0; s < 3; s++) {
                    const s = Math.floor(
                        Math.random() * Object.values(e).length
                    );
                    d.push(Object.values(e)[s]);
                }
            else if ('medium' == window.application.level)
                for (let s = 0; s < 6; s++) {
                    const s = Math.floor(
                        Math.random() * Object.values(e).length
                    );
                    d.push(Object.values(e)[s]);
                }
            else {
                if ('hard' != window.application.level) return;
                for (let s = 0; s < 9; s++) {
                    const s = Math.floor(
                        Math.random() * Object.values(e).length
                    );
                    d.push(Object.values(e)[s]);
                }
            }
            const a = d.concat(d);
            !(function (e) {
                for (let s = e.length - 1; s > 0; s--) {
                    let c = Math.floor(Math.random() * (s + 1));
                    [e[s], e[c]] = [e[c], e[s]];
                }
            })(a),
                Object.entries(a).forEach(([e, s]) => {
                    const d = document.createElement('img');
                    d.setAttribute('id', s.name),
                        d.setAttribute('src', s.src),
                        d.classList.add('card', 'card_hidden'),
                        c.appendChild(d),
                        setTimeout(function () {
                            d.setAttribute('src', s.card_upside);
                        }, 3e3),
                        d.addEventListener('click', () => {
                            d.setAttribute('src', s.src),
                                d.classList.add('card_animation'),
                                (window.application.chosenCard = []),
                                2 !== window.application.chosenCard.length &&
                                    window.application.chosenCard.push(d.id),
                                2 === window.application.chosenCard.length &&
                                    window.application.chosenCard[0] ===
                                        window.application.chosenCard[1] &&
                                    (alert('Ты выиграл'),
                                    (window.application.chosenCard = [])),
                                2 === window.application.chosenCard.length &&
                                    window.application.chosenCard[0] !==
                                        window.application.chosenCard[1] &&
                                    (alert('Ты проиграл'),
                                    (window.application.chosenCard = []));
                        });
                }),
                s.appendChild(c);
        }
        (window.application.screens.chooseLevel = function () {
            const e = document.createElement('div');
            e.classList.add('choose_level_screen'),
                s.appendChild(e),
                (window.application.blocks.chooseLevel = a),
                window.application.renderBlock('chooseLevel', e);
        }),
            window.application.renderScreen('chooseLevel');
    })();
})();
//# sourceMappingURL=bundle.js.map
