<?php

namespace SilverStripe\Axe\Extensions;

use SilverStripe\Axe\Forms\AxeFormAction;
use SilverStripe\ORM\DataExtension;

class AxeSiteTreeExtension extends DataExtension
{
    public function updateCMSActions($actions)
    {
        $actions->add(AxeFormAction::create('normal', 'A11y'));
    }
}
