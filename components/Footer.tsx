import { IconButton, Row, Text } from '@once-ui-system/core';
import { person, social } from '@/resources/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" vertical="center" gap="16">
      <Text variant="body-default-s" onBackground="neutral-weak">
        {currentYear} · {person.name} · no tracking
      </Text>
      <Row gap="8">
        {social.map((item) => (
          <IconButton
            key={item.name}
            href={item.link}
            icon={item.icon}
            variant="secondary"
            size="m"
            aria-label={item.name}
          />
        ))}
      </Row>
    </Row>
  );
};
