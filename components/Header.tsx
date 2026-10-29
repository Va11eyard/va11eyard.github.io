'use client';

import { Fade, Flex, Row, ToggleButton, Text } from '@once-ui-system/core';
import { person } from '@/resources/site';

const anchors = [
  { href: '#experience', label: 'Experience' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
];

export const Header = () => {
  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Row
        fitHeight
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          <Text onBackground="neutral-weak">{person.name}</Text>
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            wrap
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {anchors.map((a) => (
                <ToggleButton
                  key={a.href}
                  href={a.href}
                  label={a.label}
                  size="s"
                  weight="default"
                />
              ))}
            </Row>
          </Row>
        </Row>
        <Row paddingRight="12" fillWidth vertical="center" horizontal="end">
          <Flex minWidth={0} s={{ hide: true }} />
        </Row>
      </Row>
    </>
  );
};
