import * as React from 'react';

interface TabNavProps {
  lng: 'en' | 'hu'
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
  }
]

export default class TabNav extends React.PureComponent<TabNavProps, ''>
{
  constructor(props: TabNavProps) {
    super(props);
  }

  openTab(tabName) {
    var i;
    var tablinks = document.getElementsByClassName('tablinks');

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active')
    }
    var topPos = document.getElementById(tabName).offsetTop;
    document.documentElement.scrollTop = topPos - 160;
    // add an "active" class to the button that opened the tab
    document.getElementById(`${tabName}-button`).classList.add('active');
  }

  render() {
    return (
      <div id="tab" className="tab">
        <div id="image2" className="tab-image-container"></div>
        {
          links.map(link => (
            <div>
              <span>
                <button id={`${link.id}-button`} className="tablinks" onClick={() => this.openTab(`${link.id}`)}>{link[this.props.lng]}</button>
              </span>
            </div>
          ))
        }
      </div>
    );
  }
}