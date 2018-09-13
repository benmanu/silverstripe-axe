<?php

namespace SilverStripe\Axe\Extensions;

use SilverStripe\ORM\DataExtension;
use SilverStripe\View\Requirements;

class AxeCMSMainExtension extends DataExtension
{
    private static $allowed_actions = [
        'report',
    ];

    public function init()
    {
        // Requirements::css('silverstripe/axe: client/dist/styles/bundle.css');
        // Requirements::javascript('silverstripe/axe: client/dist/js/bundle.js');
        Requirements::css('axe/client/dist/styles/bundle.css');
        Requirements::javascript('axe/client/dist/js/bundle.js');
    }

    public function report()
    {
        // Create the web
    }
}
