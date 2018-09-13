<?php

namespace SilverStripe\Axe\Forms;

use SilverStripe\Forms\FormAction;

class AxeFormAction extends FormAction
{
    /**
     * Action name, normally prefixed with 'action_'
     *
     * @var string
     */
    protected $action;

    /**
     * @var string
     */
    protected $schemaComponent = 'AxeFormAction';

    /**
     * Create a new action button.
     *
     * @param string $action The method to call when the button is clicked
     * @param string $title The label on the button. This should be plain text, not escaped as HTML.
     * @param Form form The parent form, auto-set when the field is placed inside a form
     */
    public function __construct($action, $title = "", $form = null)
    {
        $this->action = "action_$action";
        $this->setForm($form);

        parent::__construct($this->action, $title);
    }

    /**
     * Add extra options to data
     */
    public function getSchemaDataDefaults()
    {
        return parent::getSchemaDataDefaults();
    }

    /**
     * @param array $properties
     * @return DBHTMLText
     */
    public function Field($properties = array())
    {
        return parent::Field($properties);
    }

    /**
     * @param array $properties
     * @return DBHTMLText
     */
    public function FieldHolder($properties = array())
    {
        return $this->Field($properties);
    }
}
