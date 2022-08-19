//actions panel stuff
var actionsWidth = 150;
var statusCodetraceWidth = 420;

var isCreateOpen = false;
var isRMQOpen = false;
var isUpdateOpen = false;

function openCreate() {
	if(!isCreateOpen) {
		$('.create').fadeIn('fast');
		isCreateOpen = true;
	}
}
function closeCreate() {
	if(isCreateOpen) {
		$('.create').fadeOut('fast');
		$('#create-err').html("");
		isCreateOpen = false;
	}
}
function openRMQ() {
	if(!isRMQOpen) {
		$('.rmq').fadeIn('fast');
		isRMQOpen = true;
	}
}
function closeRMQ() {
	if(isRMQOpen) {
		$('.rmq').fadeOut('fast');
		$('#rmq-err').html("");
		isRMQOpen = false;
	}
}
function openUpdate() {
	if(!isUpdateOpen) {
		$('.update').fadeIn('fast');
		isUpdateOpen = true;
	}
}
function closeUpdate() {
	if(isUpdateOpen) {
		$('.update').fadeOut('fast');
		$('#update-err').html("");
		isUpdateOpen = false;
	}
}


//
function hideEntireActionsPanel() {
	closeCreate();
	closeRMQ();
	closeUpdate();
	hideActionsPanel();
}

$( document ).ready(function() {
	//action pullouts
	$('#create').click(function() {
		closeUpdate();
		closeRMQ();
		openCreate();
	});
	$('#rmq').click(function() {
		closeCreate();
		closeUpdate();
		openRMQ();
	});
	$('#update').click(function() {
		closeCreate();
		closeRMQ();
		openUpdate();
	})

	//tutorial mode
	$('#st-tutorial-2 .tutorial-next').click(function() {
		showActionsPanel();
	});
	$('#st-tutorial-3 .tutorial-next').click(function() {
		hideEntireActionsPanel();
	});
	$('#st-tutorial-4 .tutorial-next').click(function() {
		showStatusPanel();
	});
	$('#st-tutorial-5 .tutorial-next').click(function() {
		hideStatusPanel();
		showCodetracePanel();
	});
	$('#st-tutorial-6 .tutorial-next').click(function() {
		hideCodetracePanel();
	});
});