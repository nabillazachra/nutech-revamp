import siteContent from '../content/site-content.json';

export function getSiteContent(){
  return siteContent;
}

export function getHomeContent(){
  return siteContent.home;
}

export function getSolutionsContent(){
  return siteContent.solutions;
}

export function getCompanyContent(){
  return siteContent.company;
}

export function getCareerContent(){
  return siteContent.career;
}

export function getGovernanceContent(){
  return siteContent.governance;
}

export function getContactContent(){
  return {
    emails: siteContent.site.emails,
    phones: siteContent.site.phones,
    offices: siteContent.site.offices,
  };
}
