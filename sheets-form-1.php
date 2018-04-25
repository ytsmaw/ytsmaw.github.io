<?php    
date_default_timezone_set("America/New_York");

//create a new project
if(isset($_POST['newProjectSubmit'])){ //check if form was submitted
    $input = $_POST['name']; //get input text
    $handle = fopen("activeProjects.html", "a+");
    $projectHTML =file_get_contents("activeProjectTemplate.html");
    $projectID = "proj".rand(0,1000000); //create a random project ID
    
    //edit the template 
    $projectHTML= str_replace("{projectID}",$projectID,$projectHTML);
    $projectHTML= str_replace("{name}",$_POST['name'],$projectHTML);
    $projectHTML= str_replace("{bgColor}","blue",$projectHTML);
    $projectHTML= str_replace("{firstStation}",$_POST['firstStation'],$projectHTML);
    $projectHTML= str_replace("{lastStation}",$_POST['lastStation'],$projectHTML);
    $projectHTML= str_replace("{totalMade}",$_POST['totalMade'],$projectHTML);
    $projectHTML= str_replace("{date}","Created: ".date('m/d/y h:i'),$projectHTML);
    
    fwrite($handle, $projectHTML);
}    

//end project
if(isset($_POST['endProjButton'])){
    $activeProjectsHTML = file_get_contents("activeProjects.html");
    $start="<!--".$_POST['projectID']."-->";
    $stop="<!--/".$_POST['projectID']."-->";
    $clippedProjects = delete_all_between($start, $stop, $activeProjectsHTML);
    
    $handle = fopen("activeProjects.html", "w+");
    fwrite($handle, $clippedProjects);
    
}

//delete everything in between two characters in a string
    function delete_all_between($beginning, $end, $string) {
      $beginningPos = strpos($string, $beginning);
      $endPos = strpos($string, $end);
      if ($beginningPos === false || $endPos === false) {
        return $string;
      }

      $textToDelete = substr($string, $beginningPos, ($endPos + strlen($end)) - $beginningPos);

      return str_replace($textToDelete, '', $string);
    }

?>

<html>
<head>
    <!--
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <script data-cfasync="false" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    -->
    <link rel="stylesheet" href="sheets-form.css">
    <title>Counter HTML Form</title>
</head>
<body>
    <div id="content-wrapper">
        <div id="newProjectTitle">NEW PROJECT</div>
        <div id="newProjectFormWrapper">
            <form id="newProjectForm" action="" method="post">
                <p><label for="name">Project Name:</label>
                <input id="name" name="name" type="text" value=""></p>
                <div id="sandwichedWrapper">
                    <div id="leftSideWrapper">
                        <p><label for="firstStation" class="newProjectLabel">First Station:</label>
                            <input id="firstStation" name="firstStation" type="number" value="" min=1 max=8></p>
                        <p><label for="lastStation" class="newProjectLabel">Last Station:</label>
                            <input id="lastStation" name="lastStation" type="number" value="" min=1 max=8></p>
                        <p><label for="totalMade" class="newProjectLabel">Total made:</label>
                            <input id="totalMade" name="totalMade" type="number" value=""></p>
                    </div>
                    <div id="rightSideWrapper">
                        <p><label for="numDiscs" class="newProjectLabel"># of Discs:</label>
                            <input id="numDiscs" name="numDiscs" type="number" value=1></p>
                        <p><label for="numInserts" class="newProjectLabel"># of Inserts:</label>
                            <input id="numInserts" name="numInserts" type="number" value=1></p>
                        <p><label for="size" class="newProjectLabel">Size:</label>
                            <select id="size" name="size">
                                <option value='LP'>LP</option>
                                <option value='10-inch'>10-inch</option>
                                <option value='7-inch'>7-inch</option>
                            </select></p>
                    </div>
                </div>
                <input id="newProjectSubmit" name="newProjectSubmit" type="submit" value="Create New Project">
            </form>
        </div>

        <div id="activeProjectsTitle">ACTIVE PROJECTS</div>
        <div id="activeProjects">
            <?php 
            $activeProjectsHTML = file_get_contents("activeProjects.html");
            if($activeProjectsHTML === ""){
                echo "<p id='noActiveProjects'>No active Projects!!!</p>";
            }else{
                echo file_get_contents("activeProjects.html");
            }

            ?>
        </div>
    </div>

    
    <script type="text/javascript">
        
    
    </script>
    <!--
    <script data-cfasync="false" type="text/javascript">
        jQuery( document ).ready(function( $ ) {
	// variable to hold request
	var request;
	// bind to the submit event of our form
	$("#New-Project").submit(function(event){
		// abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(this);
		// let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");
		// serialize the data in the form
		var serializedData = $form.serialize();
	
		// let's disable the inputs for the duration of the ajax request
		// Note: we disable elements AFTER the form data has been serialized.
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);
		$('#result').text('Sending data...');
	
		// fire off the request to /form.php
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycbxv4wFDp2dwwAG9Wx51g7AUy1F_ZEH1UvkKBwbQiBBQtvLtleI/exec",
			type: "get",
			data: serializedData
		});
	
		// callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			// log a message to the console
			$('#result').html('<a href="https://docs.google.com/spreadsheets/d/10tt64TiALYhPMqR2fh9JzkuhxW7oC0rXXPb_pmJ7HAY/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
			console.log("Hooray, it worked!");
		});
	
		// callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			// log the error to the console
			console.error(
				"The following error occured: "+
				textStatus, errorThrown
			);
		});
	
		// callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// reenable the inputs
			$inputs.prop("disabled", false);
		});
	
		// prevent default posting of form
		event.preventDefault();
	});
});
</script>
-->

</body>
</html>