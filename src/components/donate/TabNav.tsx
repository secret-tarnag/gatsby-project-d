import * as React from 'react';
import { css } from 'emotion';

interface TabNavProps {
  lng: 'en' | 'hu';
}

const links = [
  {
    en: 'Who are we?',
    hu: 'Kik vagyunk?',
    id: 'about',
  },
  {
    en: 'Our goals',
    hu: 'Céljaink',
    id: 'goals',
  },
  {
    en: 'Help us!',
    hu: 'Segíts nekünk!',
    id: 'contribute',
  },
];

const tabImage = css({
  width: '100%',
  height: '8rem',
  background: 'url(/assets/shapes_bckg.png) no-repeat right',
  backgroundSize: 'contain',
});

const tabStyle = css({
  margin: '0',
  height: '10rem',
  backgroundColor: 'white',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: '20% 25% 25% 25%',
  gridTemplateRows: 'auto',
  gridGap: '3rem',
  alignContent: 'center',
  justifyContent: 'flex-end',
  position: 'sticky',
  top: '0rem',
  zIndex: 5,
  '& button': {
    fontFamily: '"Roboto Condensed", sans-serif',
    fontSize: '1.1rem',
    backgroundColor: 'inherit',
    width: '80%',
    height: '8rem',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: '0',
    transition: '0.3s',
  },
  '& button:hover': {
    textDecoration: 'underline',
  },
});
// media query

export default class TabNav extends React.PureComponent<TabNavProps, ''> {
  constructor(props: TabNavProps) {
    super(props);
  }

  openTab(tabName: string) {
    const tablinks = document.getElementsByClassName('tablinks');
    // remove past active class selectors
    /*for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }*/
    Array.from(tablinks).forEach(tablink => {
      tablink.classList.remove('active');
    });
    // scrolling
    const topPos = document.getElementById(tabName).offsetTop;
    document.documentElement.scrollTop = topPos - 160;
    // add an "active" class to the button that opened the tab
    document.getElementById(`${tabName}-button`).classList.add('active');
  }

  render() {
    return (
      <div id="tab" className={tabStyle}>
        <div id="tab-image" className={tabImage}></div>
        {
          links.map(link => (
            <div>
              <span>
                <button
                  id={`${link.id}-button`}
                  className="tablinks"
                  onClick={() => this.openTab(`${link.id}`)}
                >
                  {link[this.props.lng]}
                </button>
              </span>
            </div>
          ))
        }
        {/*Its an ugly solution, but its working
        <script>
          {
            window.onscroll = () => {
              const tablinks = document.getElementsByClassName('tablinks');
              const tabs = document.getElementsByClassName('tabcontent');
              const nav = document.getElementById('tab');
              for (let j = 0; j < tabs.length; j++) {
                if (tabs[j].offsetTop <= nav.offsetHeight + nav.offsetTop + 100) {
                  /*for (let i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(' active', '');
                  }
                  Array.from(tablinks).forEach(tablink => {
                    tablink.className = tablink.className.replace(' active', '');
                  });
                  tablinks[j].className += ' active';
                }
              }
            }
          }
        </script>*/}
      </div>
    );
  }
}
