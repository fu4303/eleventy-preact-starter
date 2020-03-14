const { html } = require(`htm/preact`);

const LayoutDefault = require(`./LayoutDefault`);
const SectionContent = require(`./SectionContent`);
const SectionHero = require(`./SectionHero`);
const SectionTeaser = require(`./SectionTeaser`);

const sections = {
  content: SectionContent,
  hero: SectionHero,
  teaser: SectionTeaser,
};

module.exports = ({ page }) => html`
  <${LayoutDefault}>
    <div class="App">
      ${page.sections.map(({ data, name }) => html`
        <${sections[name]} data=${data}/>
      `)}
    </div>
  <//>
`;
