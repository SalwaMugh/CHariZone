import React, { Component } from 'react';

import './style.css';
import CardResult from './CardResult';

class SearchReaslt extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'HAPPY DAYS CHILDRENS CHARITY',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'TO HELP AND EDUCATE YOUNG PERSONS THROUGH THEIR LEISURE-TIME AND HOLIDAY ACTIVITIES'
      },
      {
        id: 2,
        name: 'ACTION FOR CHILDREN',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'THE CHARITY WORKS FOR THE PUBLIC BENEFIT HAVING AS ITS OBJECTS THE PROMOTION OF THE UPBRINGING AND CARE OF CHILDREN AND YOUNG PEOPLE IN NEED FROM ALL BACKGROUNDS, CULTURES, AND FAITHS OR NONE IN PARTICULAR BY:\r\n1. PROMOTING THEIR BETTER CARE AND SAFEGUARDING THEM;\r\n2. PROVIDING ASSISTANCE TO THEM AND THEIR FAMILIES AND CARERS;\r\n3. PROMOTING THEIR HEALTH;\r\n4. PROMOTING THEIR EDUCATION AND ESTABLISHMENT IN LIFE.'
      },
      {
        id: 3,
        name: 'BECOME CHARITY',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'TO PROMOTE THE CARE, UPBRINGING AND ESTABLISHMENT IN LIFE OF CHILDREN AND YOUNG PEOPLE WHO ARE OR HAVE BEEN LOOKED AFTER OR ASSISTED BY LOCAL AUTHORITIES OR OTHER PUBLIC OR CHARITABLE BODIES CHARGED WITH THE CARE & UPBRINGING OF CHILDREN OR WHO ARE OR HAVE BEEN IN THE CARE OF FOSTER OR ADOPTIVE PARENTS.'
      },
      {
        id: 4,
        name: 'COMPASSION UK CHRISTIAN CHILD',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'To advance the christian faith in all or any part of the world.\rThe relief of poverty, suffering or distress amongst children.\rThe education and training of children.\rThe development of children to social and spiritual maturity.'
      },
      {
        id: 5,
        name: 'DAVID SPURDLE',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'We care for over 3,000 kids across the world but no two are the same, so we take care to understand and meet each of their individual needs, from food and healthcare, to loving parents and quality education. We help them reach their full potential, stand on their own two feet and change their futures. We?ve transformed thousands of kids? lives, and we are only just getting started.',
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div>SearchReaslt</div>
        <CardResult />
      </React.Fragment>
    );
  }
}

export default SearchReaslt;
