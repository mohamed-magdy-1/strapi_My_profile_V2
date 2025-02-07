import type { Schema, Struct } from '@strapi/strapi';

export interface FieldAboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_field_about_abouts';
  info: {
    description: '';
    displayName: 'about';
    icon: 'bulletList';
  };
  attributes: {
    content_about: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Schema.Attribute.Text;
  };
}

export interface FieldAboutImages extends Struct.ComponentSchema {
  collectionName: 'components_field_about_images';
  info: {
    displayName: 'images';
    icon: 'landscape';
  };
  attributes: {
    my_images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.Text;
  };
}

export interface FieldAboutSkills extends Struct.ComponentSchema {
  collectionName: 'components_field_about_skills';
  info: {
    displayName: 'skills';
    icon: 'briefcase';
  };
  attributes: {
    mySkills: Schema.Attribute.String;
    skill_icon: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'field-about.about': FieldAboutAbout;
      'field-about.images': FieldAboutImages;
      'field-about.skills': FieldAboutSkills;
    }
  }
}
