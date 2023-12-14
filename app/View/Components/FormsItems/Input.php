<?php

namespace App\View\Components\FormsItems;
use Illuminate\View\Component;

class Input extends Component
{
    public $class;
    public $name;
    public $type;
    public $value;
    public $title;

    /**
     * Create a new component instance.
     * @param $class
     * @param $name
     * @param $type
     * @param $value
     * @param $title
     */
    public function __construct($class = null, $name, $type, $value, $title = null)
    {
        $this->class = $class;
        $this->name = $name;
        $this->type = $type;
        $this->value = $value;
        $this->title = $title;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms-items.input');
    }
}
