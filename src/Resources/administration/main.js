import template from './src/extension/sw-product-settings-form/sw-product-settings-form.html.twig';

const { Component } = Shopware;

Component.override('sw-product-settings-form', {
    template
});
