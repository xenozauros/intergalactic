import React, { ComponentProps } from 'react';
import Button from '@semcore/button';
import FormatText from '@semcore/format-text';
import createComponent, { Component, Merge } from '@semcore/core';
import i18nEnhance, { IWithI18nEnhanceProps } from '@semcore/utils/lib/enhances/i18nEnhance';
import Error, { getIconPath } from '../Error';
import de from './translations/de.json';
import en from './translations/en.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import it from './translations/it.json';
import ja from './translations/ja.json';
import pt from './translations/pt.json';
import ru from './translations/ru.json';
import zh from './translations/zh.json';
import ko from './translations/ko.json';
import vi from './translations/vi.json';

const i18n = { de, en, es, fr, it, ja, ru, zh, pt, ko, vi };

export interface IProjectNotFoundProps extends IWithI18nEnhanceProps {
  /**
   * Link to the projects
   * @default /projects
   */
  projectsLink?: string;
  contactsLink?: string;
  supportTeamLink?: string;
}

class RootProjectNotFound extends Component<IProjectNotFoundProps> {
  static displayName = 'Maintenance';
  static enhance = [i18nEnhance()];
  static defaultProps = {
    i18n,
    icon: getIconPath('project_not_found'),
    projectsLink: '/projects',
    contactsLink: '/company/contacts',
    supportTeamLink: 'mailto:mail@semrush.com',
  };

  render() {
    const { Root } = this;
    const { Children, getI18nText, projectsLink, contactsLink, supportTeamLink } = this.asProps;
    const { title, btnProjects, btnContacts } = getI18nText();
    const text = getI18nText('text', { url: supportTeamLink });
    return (
      <Root render={Error}>
        <Error.Title>{title}</Error.Title>
        {/* @ts-ignore */}
        <Error.Description tag={FormatText} size="xl" dangerouslySetInnerHTML={{ __html: text }} />
        <Children />
        <Error.Controls>
          <Button tag="a" type="none" size="xl" use="primary" theme="info" href={projectsLink}>
            {btnProjects}
          </Button>
          <Button size="xl" tag="a" type="none" href={contactsLink}>
            {btnContacts}
          </Button>
        </Error.Controls>
      </Root>
    );
  }
}

export default createComponent<Merge<IProjectNotFoundProps, ComponentProps<typeof Error>>>(
  RootProjectNotFound,
);
