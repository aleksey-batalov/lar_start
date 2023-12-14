<?php

namespace App\View\Components\FormsItems;
use Illuminate\View\Component;

class Textarea extends Component
{
    public $class;
    public $name;
    public $rows;
    public $value;
    public $title;
    public $type;
    public $placeholder;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($class = null, $name, $rows = null, $title = null, $value = null, $type = null, $placeholder = null)
    {
        $this->class = $class;
        $this->name = $name;
        $this->rows = $rows;
        $this->title = $title;
        $this->value = $value;
        $this->type = $type;
        $this->placeholder = $placeholder;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms-items.textarea');
    }
}
