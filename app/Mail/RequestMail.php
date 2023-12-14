<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RequestMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $request;
    public $subject;
    public $view;

    public function __construct($request)
    {
        $this->request = $request;
        if($request->input('title') == 'callback'){
            $this->subject = 'Заказан обратный звонок';
            $this->view = 'mail.callback';
        }elseif ($request->input('title') == 'request-garage'){
            $this->subject = 'Заявка на просчет';
            $this->view = 'mail.request-garage';
        }
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view($this->view)->subject($this->subject);
    }
}
