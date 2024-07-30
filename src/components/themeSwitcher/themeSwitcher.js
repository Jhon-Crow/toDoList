import { THEME_KEY } from '../../consts/consts.js';

export class themeSwitcher extends HTMLElement {
	static get name() {
		return 'theme-switcher-component';
	}
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
<style>
                        :host {
                            display: inline-block;
                        }
                        .theme-toggle-button {
                        	line-height: 0;
                            border-radius: .4rem;
                            cursor: pointer;
                            border: 1px solid var(--accent-color);
                            color: white;
                            background:  var(--accent-color);
                            font: var(--font-large);
                            padding: .4rem;
                            height: 2.375rem;
                            width: 2.375rem;
                        }
                        .theme-icon {
                            background-repeat: no-repeat;
                            background-image: var(--theme-switcher-svg);
                            background-size: 1.375rem;
                            background-position: center;
                        }
                        
                    </style>
                    <button class="theme-toggle-button button theme-button theme-icon">
                    </button>
                `;
		this.button = this.shadowRoot.querySelector('.theme-toggle-button');
		this.button.addEventListener('click', this.toggleTheme.bind(this));
		this.themes = ['app_theme_light', 'app_theme_dark'];
		this.currentThemeIndex = 0;
	}

	connectedCallback() {
		this.loadTheme();
		this.updateTheme();
	}

	toggleTheme() {
		this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
		this.updateTheme();
	}

	loadTheme() {
		const savedTheme = localStorage.getItem(THEME_KEY);
		if (savedTheme) {
			this.currentThemeIndex = this.themes.indexOf(savedTheme);
			if (this.currentThemeIndex === -1) {
				this.currentThemeIndex = 0;
			}
		}
	}

	saveTheme() {
		localStorage.setItem(THEME_KEY, this.themes[this.currentThemeIndex]);
	}

	updateTheme() {
		document.body.classList.remove(...this.themes);
		document.body.classList.add(this.themes[this.currentThemeIndex]);
		this.saveTheme();
	}
}
