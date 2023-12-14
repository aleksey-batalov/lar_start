@if($type == 'submit')

    <input id="input-{{$name}}" class="{{$class}}" type="{{$type}}" name="{{$name}}" value="{{$value}}" disabled="">

@elseif($type == 'hidden')

    <input title="{{$name}}" type="{{$type}}" name="{{$name}}" value="{{$value}}">

@else

    <label class="input-label" for="input-{{$name}}">{{$title}}</label>
    <input id="input-{{$name}}" class="{{$class}}" type="{{$type}}" name="{{$name}}" value="{{$value}}">

@endif


