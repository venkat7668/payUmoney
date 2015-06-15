/**
 * Created by Venkat on 30-06-2014.
 */
$(function() {
    $("input[type='submit']").click(function(e){
        e.preventDefault();
        var form = $('form[name="payuForm"]');
        var data = form.serializeObject();
        $.ajax({
            type: "POST",
            url: "/getShaKey",
            data: JSON.stringify(data),
            contentType: 'application/json',
            dataType: 'json',
            success:function(response) {
                $('form[name="payuForm"] input[name="hash"]').val(response.data);
                form.submit();
            },
            error :function(jqXHR, textStatus, errorThrown){
                console.log(textStatus, errorThrown)
            }
        });
    });
});
//object
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};